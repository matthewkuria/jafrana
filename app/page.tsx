import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import WhoWeAre from "./components/WhoWeAre";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <section className="p-2 mt-10">
        <HeroSection />
      </section>
      <article className="">
        <WhoWeAre />
      </article>
      <aside className="w-full mt-10">
        <Services />
      </aside>
      <aside className="w-full">
        <Testimonials />
      </aside>
    </main>
  );
}
