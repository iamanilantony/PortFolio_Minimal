import className from "classnames";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

type IVerticalFeatureRowProps = {
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  imageAlt: string;
  reverse?: boolean;
  links?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    "flex",
    "justify-between",
    "flex-wrap",
    "items-center",
    {
      "flex-row-reverse": props.reverse,
    }
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 text-left sm:px-2 flex-[2_2_0%]">
        <h3 className="text-5xl text-gray-900 font-bold">{props.title}</h3>
        <h5
          className="text-lg font-normal text-gray-800"
          style={{ marginTop: "-4px" }}
        >
          {props.subtitle}
        </h5>
        <div className="mt-6 text-md leading-1">{props.description}</div>
      </div>

      {props.image && (
        <div className="flex justify-end w-full sm:w-1/2 p-6 flex-1">
          <Image
            width="200"
            height="200"
            src={`${router.basePath}${props.image}`}
            alt={props.imageAlt}
          />
        </div>
      )}
    </div>
  );
};

const VerticalFeatureCard = (props: IVerticalFeatureRowProps) => {
  // const verticalFeatureClass = className(
  //   "flex",
  //   "w-52",
  //   "h-64",
  //   "mx-auto",
  //   // "mt-10",
  //   "bg-gradient-to-r",
  //   "p-[6px]",
  //   "from-[#6EE7B7]",
  //   "via-[#3B82F6]",
  //   "to-[#9333EA]",
  //   {
  //     "flex-row-reverse": props.reverse,
  //   }
  // );

  // const router = useRouter();
  return (
    <div className="card w-56 glass text-gray-800">
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        {props.links && (
          <div className="flex text-xl">
            <div className="pr-2">
              <AiFillGithub />
            </div>
            <div>
              <AiOutlineLink />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { VerticalFeatureRow, VerticalFeatureCard };
