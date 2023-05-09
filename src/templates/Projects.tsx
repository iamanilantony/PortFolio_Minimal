import { Background } from "../background/Background";
import { Meta } from "../layout/Meta";
import { Section } from "../layout/Section";
import Navbar from "../navigation/NavBar";
import { AppConfig } from "../utils/AppConfig";
import { Footer } from "./Footer";
import ProjectFeatures from "./ProjectFeatures";

const Projects = () => (
  <div className="dark:bg-['#121212']">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Background color="bg-gray-100 dark:bg-[#121212] dark:text-white text-black">
      <>
        <Section yPadding="py-6">
          <Navbar />
        </Section>
        <Section yPadding="pb-2">
          <ProjectFeatures />
        </Section>
      </>
    </Background>
    <Footer />
  </div>
);

export { Projects };
