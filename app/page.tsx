import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
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
      <aside className="">
        <Services />
      </aside>
    </main>
  );
}
