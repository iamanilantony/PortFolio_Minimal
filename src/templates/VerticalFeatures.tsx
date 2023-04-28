import {
  VerticalFeatureCard,
  VerticalFeatureRow,
} from "../feature/VerticalFeatureRow";
import { Section } from "../layout/Section";
import { BsFillBriefcaseFill } from "react-icons/bs";

const VerticalFeatures = () => (
  <Section>
    <VerticalFeatureRow
      title="Anil Antony"
      // subtitle="SDE at Settlin"
      description="I strive while utilising both the logical and creative part of the brain. I feel most in my place while continuously operating in these roles as a full stack developer within a team."
      image="/assets/images/animoji.png"
      imageAlt="First feature alt text"
      count
    />
    <Section title="Projects">
      <div
        className="flex justify-between flex-col md:flex-row"
        style={{ marginTop: "-1rem" }}
      >
        <VerticalFeatureCard
          title="BizSol"
          description="A Platform for companies and experts to meet for their major issues"
          imageAlt="Second feature alt text"
          points={[
            "Hackathon project made during HackNITR 4.0",
            "Made first under 36 hours and got selected top 23 over 350+ Submissions",
            "Made using MERN Stack using Formik, Redux, Bootstrap & Next Components",
          ]}
          links
        />
        <VerticalFeatureCard
          title="Coming Soon"
          description="Loading"
          imageAlt="Second feature alt text"
          links
        />
        <VerticalFeatureCard
          title="Coming Soon"
          description="Loading"
          imageAlt="Second feature alt text"
          links
        />
      </div>
    </Section>
    <Section title="Work" icon={<BsFillBriefcaseFill />}>
      <div
        className="flex justify-between flex-col md:flex-row"
        style={{ marginTop: "-1rem" }}
      >
        <VerticalFeatureCard
          title="SDE 1"
          subtitle="Settlin"
          description="July 2022 - present"
          imageAlt="Second feature alt text"
          image="/assets/images/settlin.png"
          padding
        />
        <VerticalFeatureCard
          title="SDE Intern"
          subtitle="Settlin"
          description="May 2022 - July 2022"
          imageAlt="Second feature alt text"
          image="/assets/images/settlin.png"
          padding
        />
        <VerticalFeatureCard
          title="SDE Trainee"
          subtitle="ICT Academy Kerala"
          description="Oct 2021- Sep 2022"
          imageAlt="Second feature alt text"
          // image="/assets/images/ict.png"
        />
      </div>
    </Section>
    <Section title="Achievements">
      <div className="flex flex-col justify-around space-y-4">
        <VerticalFeatureRow
          title="HACKNITR Hackathon"
          smallTitle
          subtitle="Selected for top 20 from 350+ Submissions"
          // description="HACKNITR this year was the biggest student run hackathon at the time"
          imageAlt="Second feature alt text"
          links
        />
        <VerticalFeatureRow
          smallTitle
          title="UG Batch Topper"
          subtitle="Top scorer in the college batch"
          // description=" justo erat semper enim, non hendrerit dui odio id enim."
          imageAlt="Second feature alt text"
          links
        />
      </div>
    </Section>
  </Section>
);

export { VerticalFeatures };
