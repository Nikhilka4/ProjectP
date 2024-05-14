import Hero from "@/pages/components/Hero";
import NavBar from "@/pages/components/NavBar";
import Features from "@/pages/components/Features";
import Services from "@/pages/components/Services";
import PreviousWorks from "@/pages/components/PreviousWorks";
import Testimonials from "@/pages/components/Testimonials";
import Steps from "@/pages/components/Steps";
import ClientForm from "@/pages/components/ClientForm";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Features />
      <Services />
      <PreviousWorks />
      <Testimonials />
      <Steps />
      <ClientForm />
    </div>
  );
}
