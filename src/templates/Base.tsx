import { Meta } from "../layout/Meta";
import { AppConfig } from "../utils/AppConfig";
// import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
// import { VerticalFeatures } from "./VerticalFeatures";

const Base = () => (
  <div className="dark:bg-['#121212']">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Footer />
  </div>
);

export { Base };
