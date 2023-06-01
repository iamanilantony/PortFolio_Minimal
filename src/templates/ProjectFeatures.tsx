import React from "react";
import { Section } from "../layout/Section";
import { VerticalFeatureCard } from "../feature/VerticalFeatureRow";

const ProjectFeatures = () => {
  return (
    <>
      <Section title="Projects">
        <div className="flex justify-between flex-wrap mb-2">
          <VerticalFeatureCard
            title="BizSol"
            description="A Quora alternative where answers gets payed"
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
            title="Track My trip"
            description="
            Revolutionizing travel agency operations with streamlined registration, planning, and itinerary tracking for customers."
            imageAlt="A platform for you "
            links
            points={[
              "Simplified registration process: Our platform simplifies the trip registration process for travelers, allowing them to sign up easily and provide necessary details.",
              "Efficient trip planning: Travel agencies can efficiently plan multi-day trips by creating detailed itineraries, including activities, accommodations, and transportation.",
              "Seamless communication: Agencies can send updates and changes to itineraries directly to travelers via unique links, ensuring clear and timely communication.",
              "Personalized itinerary tracking: Travelers receive unique links to access their personalized itineraries, enabling them to track trip details and stay organized.",
              "Real-time updates: Agencies can instantly notify travelers of any itinerary changes or updates during the trip, ensuring they are well-informed.",
              "Enhanced guest experience: By utilizing our platform, travel agencies provide a convenient and transparent process, empowering customers to have a seamless travel experience.",
            ]}
          />
          <VerticalFeatureCard
            title="Cinefest"
            description="Comprehensive SaaS platform for seamless online film festival management."
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
          className="flex justify-between flex-col md:flex-row mb-10"
          // style={{ marginTop: "-1rem" }}
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
