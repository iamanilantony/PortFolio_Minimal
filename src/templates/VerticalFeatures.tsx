import {
  VerticalFeatureCard,
  VerticalFeatureRow,
} from "../feature/VerticalFeatureRow";
import { Section } from "../layout/Section";
import { BsFillBriefcaseFill, BsFillBusFrontFill } from "react-icons/bs";
// import { BiSolidCameraMovie } from "react-icons/bi";
import { BiCameraMovie } from "react-icons/bi";
import { TiBusinessCard } from "react-icons/ti";
import { IoIosConstruct } from "react-icons/io";

const VerticalFeatures = () => (
  <Section>
    <VerticalFeatureRow
      title="Anil Antony"
      // subtitle="SDE at Settlin"
      description="I strive while utilising both the logical and creative part of the brain. I feel most in my place while continuously operating in these roles as a full stack developer within a team."
      // image="/assets/images/IMG.png"
      image="/assets/images/animoji.png"
      imageAlt="First feature alt text"
      count
    />
    <Section title="Projects" icon={<IoIosConstruct />}>
      <div
        className="flex justify-between flex-col md:flex-row"
        style={{ marginTop: "-1rem" }}
      >
        <VerticalFeatureCard
          title="BizSol"
          description="A Quora alternative where answers gets payed by giving business solutions"
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
          // icon={<BiSolidBusiness className="text-blue-400" />}
          icon={<TiBusinessCard className="text-blue-400" />}
          iconColor="red"
          stack={["React", "Express", "Bootstrap", "Redux", "Mongo", "Formik"]}
          hover="/assets/images/Bizolv.gif"
        />
        <VerticalFeatureCard
          title="Track My trip"
          description="A Product which will help you keep track of your long trips with the help of travel agencies"
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
          icon={<BsFillBusFrontFill className="text-red-400" />}
          iconColor="red"
          stack={["NextJs", "NextJs", "TRPC", "Mongo", "Typescript"]}
          hover="/assets/images/Bizolv.gif"
        />
        <VerticalFeatureCard
          title="CineFest"
          description="A platform for hosting online film festivals and more"
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
          icon={<BiCameraMovie className="text-green-600" />}
          iconColor="green"
          stack={["Next", "TRPC", "Tailwind", "Redux", "TypeScript"]}
          hover="/assets/images/Bizolv.gif"
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
          description="May 2022 - present"
          imageAlt="Second feature alt text"
          image="/assets/images/settlin.png"
          padding
          stack={["Graphql", "Meteor", "Lamda", "ReactJs", "TypeScript"]}
        />
        {/* <VerticalFeatureCard
          title="SDE Intern"
          subtitle="Settlin"
          description="May 2022 - July 2022"
          imageAlt="Second feature alt text"
          image="/assets/images/settlin.png"
          padding
          stack={["ReactJs", "Meteor", "Node", "Redux", "MUI"]}
        /> */}
        <VerticalFeatureCard
          title="SDE Trainee"
          subtitle="ICT Academy Kerala"
          description="Oct 2021- Sep 2022"
          imageAlt="Second feature alt text"
          image="/assets/images/ict.png"
          stack={["Angular", "Express", "Node", "Mongo", "Bootstrap"]}
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
