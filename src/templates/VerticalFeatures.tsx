import {
  VerticalFeatureCard,
  VerticalFeatureRow,
} from "../feature/VerticalFeatureRow";
import { Section } from "../layout/Section";

const VerticalFeatures = () => (
  <Section>
    <VerticalFeatureRow
      title="Anil Antony"
      subtitle="Scaling at Settlin"
      description="I strive while utilising both the logical and creative part of the brain. I feel most in my place while continuously operating in these roles as a full stack developer within a team."
      image="/assets/images/animoji.png"
      imageAlt="First feature alt text"
      // style={{ marginTop: "-4rem" }}
    />
    <Section title="Projects">
      <div className="flex justify-between" style={{ marginTop: "-1rem" }}>
        <VerticalFeatureCard
          title="BizSol"
          description="A Platform for companies and experts to meet for their major issues"
          imageAlt="Second feature alt text"
          links
        />
        <VerticalFeatureCard
          title="BizSol"
          description=" justo erat semper enim, non hendrerit dui odio id enim."
          imageAlt="Second feature alt text"
          links
        />
        <VerticalFeatureCard
          title="BizSol"
          description=" justo erat semper enim, non hendrerit dui odio id enim."
          imageAlt="Second feature alt text"
          links
        />
      </div>
    </Section>
    <Section title="Work Experience">
      <div className="flex justify-between" style={{ marginTop: "-1rem" }}>
        <VerticalFeatureCard
          title="BizSol"
          description="A Platform for companies and experts to meet for their major issues"
          imageAlt="Second feature alt text"
          links
        />
        <VerticalFeatureCard
          title="BizSol"
          description=" justo erat semper enim, non hendrerit dui odio id enim."
          imageAlt="Second feature alt text"
          links
        />
        <VerticalFeatureCard
          title="BizSol"
          description=" justo erat semper enim, non hendrerit dui odio id enim."
          imageAlt="Second feature alt text"
          links
        />
      </div>
    </Section>
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
