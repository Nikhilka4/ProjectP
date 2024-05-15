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
    <div className="snap scroll-pt-[110px] snap-y snap-mandatory h-screen overflow-auto">
      <NavBar />
      <Hero className="snap-start" />
      <Features className="snap-start" />
      <Services className="snap-start" />
      <PreviousWorks className="snap-start" />
      <Testimonials className="snap-start" />
      <Steps className="snap-start" />
      <ClientForm className="snap-start" />
    </div>
  );
}
// import React, { useRef } from "react";
// import Hero from "@/pages/components/Hero";
// import NavBar from "@/pages/components/NavBar";
// import Features from "@/pages/components/Features";
// import Services from "@/pages/components/Services";
// import PreviousWorks from "@/pages/components/PreviousWorks";
// import Testimonials from "@/pages/components/Testimonials";
// import Steps from "@/pages/components/Steps";
// import ClientForm from "@/pages/components/ClientForm";


// export default function Home() {
//   const homeRef = useRef(null);
//   return (
//     <div
//       className="snap scroll-pt-[110px] snap-y snap-mandatory h-screen overflow-auto"
//       ref={homeRef}
//     >
//       <NavBar containerRef={homeRef} />
//       <Hero className="snap-start" />
//       <Features className="snap-start" />
//       <Services className="snap-start" />
//       <PreviousWorks className="snap-start" />
//       <Testimonials className="snap-start" />
//       <Steps className="snap-start" />
//       <ClientForm className="snap-start" />
//     </div>
//   )
// }