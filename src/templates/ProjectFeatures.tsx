import React from "react";
import { Section } from "../layout/Section";
import { VerticalFeatureCard } from "../feature/VerticalFeatureRow";

const ProjectFeatures = () => {
  return (
    <>
      <Section title="Projects">
        <div
          className="flex justify-between flex-col md:flex-row flex-wrap"
          //   style={{ marginTop: "-1rem" }}
        >
          <VerticalFeatureCard
            title="BizSol"
            description="A Platform for companies and experts to meet for their major issues"
            imageAlt="Second feature alt text"
            points={[
              "Hackathon project made during HackNITR 4.0",
              "Made first under 36 hours and got selected top 23 over 350+ Submissions",
              "Made using MERN Stack using Formik, Redux, Bootstrap & Next Components",
              "Competed as a soloHacker",
              "Appreciated for best design & presentation",
              "Competed as a soloHacker",
            ]}
            links
          />
          <VerticalFeatureCard
            title="Coming Soon"
            description="Loading"
            imageAlt="Second feature alt text"
            links
            points={[
              "Comging Soon HackNITR 4.0",
              "Comging Soon hours and got selected top 23 over 350+ Submissions",
              "Comging Soon using Formik, Redux, Bootstrap & Next Components",
              "Comging Soon",
              "Comging Soon & presentation",
              "Comging Soon",
            ]}
          />
          <VerticalFeatureCard
            title="Coming Soon"
            description="Loading"
            imageAlt="Second feature alt text"
            points={[
              "Hackathon project made during HackNITR 4.0",
              "Made first under 36 hours and got selected top 23 over 350+ Submissions",
              "Made using MERN Stack using Formik, Redux, Bootstrap & Next Components",
              "Competed as a soloHacker",
              "Appreciated for best design & presentation",
              "Competed as a soloHacker",
            ]}
            links
          />
          <VerticalFeatureCard
            title="Coming Soon"
            description="Loading"
            imageAlt="Second feature alt text"
            points={[
              "Hackathon project made during HackNITR 4.0",
              "Made first under 36 hours and got selected top 23 over 350+ Submissions",
              "Made using MERN Stack using Formik, Redux, Bootstrap & Next Components",
              "Competed as a soloHacker",
              "Appreciated for best design & presentation",
              "Competed as a soloHacker",
            ]}
            links
          />
        </div>
      </Section>
      <Section title="Mini Projects">
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
              "Competed as a soloHacker",
              "Appreciated for best design & presentation",
              "Competed as a soloHacker",
            ]}
            links
          />
          <VerticalFeatureCard
            title="Coming Soon"
            description="Loading"
            imageAlt="Second feature alt text"
            links
            points={[
              "Comging Soon HackNITR 4.0",
              "Comging Soon hours and got selected top 23 over 350+ Submissions",
              "Comging Soon using Formik, Redux, Bootstrap & Next Components",
              "Comging Soon",
              "Comging Soon & presentation",
              "Comging Soon",
            ]}
          />
          <VerticalFeatureCard
            title="Coming Soon"
            description="Loading"
            imageAlt="Second feature alt text"
            points={[
              "Hackathon project made during HackNITR 4.0",
              "Made first under 36 hours and got selected top 23 over 350+ Submissions",
              "Made using MERN Stack using Formik, Redux, Bootstrap & Next Components",
              "Competed as a soloHacker",
              "Appreciated for best design & presentation",
              "Competed as a soloHacker",
            ]}
            links
          />
        </div>
      </Section>
    </>
  );
};

export default ProjectFeatures;
