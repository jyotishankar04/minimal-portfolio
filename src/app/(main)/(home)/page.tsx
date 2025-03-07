import HeroAbout from "@/components/app/hero-about";
import Hero from "@/components/app/hero";
import HeroProjects from "@/components/app/hero-projects";

const page = () => {
  return (
    <>
      <Hero />
      <HeroAbout />
      <HeroProjects />
    </>
  );
};

export default page;
