import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import paypalQr from "@/assets/paypal-donation-qr.jpeg";

const benefits = [
  "Help establish a permanent home for worship.",
  "Support the growth and equipping of future leaders.",
  "Become part of a lasting Kingdom legacy.",
];

const interests = [
  "Founding Partner — $400",
  "Monthly Partner",
  "One-time Donation",
  "I want more information",
];

const DONATION_EMAIL = "mountcalvaryintl@gmail.com";

const fieldClass =
  "mt-2 w-full border border-input bg-card px-4 py-3 font-normal outline-none transition focus:border-primary focus:ring-1 focus:ring-primary";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");

const Partnership = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload: Record<string, string> = { "form-name": "founding-partners" };
    formData.forEach((value, key) => {
      payload[key] = String(value);
    });

    setSubmitting(true);
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
      setSubmitted(true);
      form.reset();
      toast({
        title: "Submission received",
        description:
          "Thank you for your interest in becoming a Mount Calvary Founding Partner. We will contact you soon.",
      });
    } catch (error) {
      console.error("Founding partner form submission failed:", error);
      toast({
        variant: "destructive",
        title: "We could not send your information",
        description: `Please try again in a moment, or email us directly at ${DONATION_EMAIL}.`,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section id="partner-meaning" className="overflow-hidden bg-secondary py-20 text-secondary-foreground md:py-28">
        <div className="mx-auto grid min-w-0 max-w-[1200px] gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="min-w-0">
            <p className="eyebrow">A lasting Kingdom legacy</p>
            <h2 className="mt-4 font-display text-5xl font-bold uppercase leading-[0.95] md:text-7xl">Your Partnership Is Part of the Miracle.</h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-secondary-foreground/70">Founding Partners are people who believe in the vision God has given Mount Calvary and choose to invest in the future of the church, our city, and the generations to come.</p>
            <Button asChild size="lg" className="mt-8 uppercase"><a href="#founding-partners">I Want to Be a Founding Partner <ArrowRight /></a></Button>
          </div>
          <div className="min-w-0 border-y border-primary/35">
            {benefits.map((benefit, index) => (
              <div key={benefit} className="flex gap-5 border-b border-secondary-foreground/15 py-7 last:border-b-0">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-primary text-primary"><Check className="h-4 w-4" /></span>
                <div><span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">0{index + 1}</span><p className="mt-2 font-display text-xl">{benefit}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="founding-partners" className="bg-card py-20 md:py-28">
        <div className="mx-auto grid max-w-[1100px] gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="eyebrow">Founding Partners</p>
            <h2 className="mt-4 font-display text-5xl font-bold uppercase leading-[0.95] text-foreground md:text-6xl">Take Your Next Step.</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">Share your details and our team will personally reach out with the next steps for partnering with Mount Calvary International.</p>
            <p className="mt-7 border-l border-primary pl-5 text-sm font-semibold uppercase tracking-[0.16em] text-foreground">Pray. Give. Partner.</p>
          </div>

          <div>
            <form
              name="founding-partners"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="border border-border bg-background p-6 shadow-lg md:p-9"
            >
              <input type="hidden" name="form-name" value="founding-partners" />
              <p className="hidden">
                <label>Do not fill this out: <input name="bot-field" /></label>
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold text-foreground">Full Name *
                  <input required name="fullName" type="text" autoComplete="name" className={fieldClass} placeholder="Your full name" />
                </label>
                <label className="text-sm font-semibold text-foreground">Email *
                  <input required name="email" type="email" autoComplete="email" className={fieldClass} placeholder="you@example.com" />
                </label>
                <label className="text-sm font-semibold text-foreground">Phone / WhatsApp *
                  <input required name="phone" type="tel" autoComplete="tel" className={fieldClass} placeholder="+1 555 000 0000" />
                </label>
                <label className="text-sm font-semibold text-foreground">Country *
                  <input required name="country" type="text" autoComplete="country-name" className={fieldClass} placeholder="United States" />
                </label>
              </div>

              <label className="mt-5 block text-sm font-semibold text-foreground">Partnership Interest *
                <select required name="interest" className={fieldClass} defaultValue="">
                  <option value="" disabled>Select an option</option>
                  {interests.map((option) => (<option key={option} value={option}>{option}</option>))}
                </select>
              </label>

              <label className="mt-5 block text-sm font-semibold text-foreground">Message (optional)
                <textarea name="message" className={`${fieldClass} min-h-28 resize-y`} placeholder="How would you like to partner?" />
              </label>

              <Button type="submit" size="lg" disabled={submitting} className="mt-6 w-full uppercase">
                {submitting ? (<><Loader2 className="animate-spin" /> Sending...</>) : (<>Become a Founding Partner <ArrowRight /></>)}
              </Button>

              {submitted && (
                <p role="status" className="mt-4 border-l-2 border-primary bg-accent px-4 py-3 text-sm leading-6 text-foreground">
                  Thank you for your interest in becoming a Mount Calvary Founding Partner. We will contact you soon.
                </p>
              )}
            </form>

            <div className="mt-10 border border-border bg-background p-6 text-center shadow-lg md:p-9">
              <p className="eyebrow">Scan to Donate with PayPal</p>
              <h3 className="mt-3 font-display text-3xl font-bold uppercase leading-tight text-foreground">Support Mount Calvary International</h3>
              <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground">Your generosity helps advance the mission of Mount Calvary International. Scan the QR Code below to make a donation through PayPal.</p>
              <img
                src={paypalQr}
                alt="PayPal QR code to donate to Mount Calvary International"
                loading="lazy"
                className="mx-auto mt-7 w-full max-w-[280px] border border-border"
              />
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-foreground">PayPal</p>
              <a href={`mailto:${DONATION_EMAIL}`} className="mt-2 inline-block text-sm text-muted-foreground underline underline-offset-4 transition hover:text-primary">{DONATION_EMAIL}</a>
              <Button asChild size="lg" className="mt-6 w-full uppercase">
                <a href="https://www.paypal.com/myaccount/transfer/send" target="_blank" rel="noopener noreferrer">Donate via PayPal <ArrowRight /></a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partnership;
