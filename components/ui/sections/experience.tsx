import TraitsSection from "@/components/helpers/trait-helper";
import { Reveal } from "../enhancers/motion-utils";

export const Experience = () => {
  return (
    <>
      <Reveal>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-theme-fg">
          Experiences
        </h2>
      </Reveal>
      <TraitsSection />
    </>
  );
};
