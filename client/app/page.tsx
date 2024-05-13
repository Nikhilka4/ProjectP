import Hero from "@/pages/components/Hero";
import NavBar from "@/pages/components/NavBar";
import Features from "@/pages/components/Features";
import Services from "@/pages/components/Services";
import PreviousWorks from "@/pages/components/PreviousWorks";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Features />
      <Services />
      <PreviousWorks />
    </div>
  );
}
