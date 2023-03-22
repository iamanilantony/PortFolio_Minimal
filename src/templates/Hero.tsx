import { Background } from "../background/Background";
import { Section } from "../layout/Section";
import NavBar from "../navigation/NavBar";
import { VerticalFeatures } from "./VerticalFeatures";

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavBar />
    </Section>
    <Section yPadding="pb-32">
      <VerticalFeatures />
    </Section>
  </Background>
);

export { Hero };
