import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WelcomeVideo from "@/components/WelcomeVideo";
import MinistryStory from "@/components/MinistryStory";
import Campaign from "@/components/Campaign";
import Partnership from "@/components/Partnership";
import ScriptureCTA from "@/components/ScriptureCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WelcomeVideo />
        <MinistryStory />
        <Campaign />
        <Partnership />
        <ScriptureCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
