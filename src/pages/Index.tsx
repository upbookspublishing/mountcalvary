import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WelcomeVideo from "@/components/WelcomeVideo";
import MinistryStory from "@/components/MinistryStory";
import Books from "@/components/Books";
import Magazine from "@/components/Magazine";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WelcomeVideo />
        <MinistryStory />
        <Books />
        <Magazine />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
