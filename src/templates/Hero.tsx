import { Background } from "../background/Background";
import { Section } from "../layout/Section";
import NavBar from "../navigation/NavBar";
import { VerticalFeatures } from "./VerticalFeatures";

const Hero = () => {
  return (
    <Background color="bg-gray-100 dark:bg-gray-800 dark:text-white">
      <Section yPadding="py-6">
        <NavBar />
      </Section>
      <Section yPadding="pb-2">
        <VerticalFeatures />
      </Section>
    </Background>
  );
};
export { Hero };
