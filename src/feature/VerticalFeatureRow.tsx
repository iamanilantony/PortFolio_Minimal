import className from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { Timer } from "timer-node";

type IVerticalFeatureRowProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  imageAlt: string;
  reverse?: boolean;
  links?: boolean;
  icons?: string;
  smallTitle?: boolean;
  padding?: boolean;
  count?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    "flex",
    "md:justify-between",
    "flex-wrap",
    "flex-col-reverse",
    "md:flex-row",
    "md:px-0",
    "px-4",
    {
      "flex-row-reverse": props.reverse,
    }
  );

  const verticalTitleClass = className("text-gray-900", "font-bold", {
    "text-xl": props.smallTitle,
    "text-5xl": !props.smallTitle,
  });

  const router = useRouter();

  const timer = new Timer({
    label: "test-timer",
    startTimestamp: 1653024001233, // 2019-07-14 03:13:21.233Z
  });

  let value = timer.time().d;
  const YEAR = 365,
    MONTH = 30,
    WEEK = 7;
  let year, months, week, days;

  year = value >= YEAR ? Math.floor(value / YEAR) : 0;
  value = year ? value - year * YEAR : value;

  months = value >= MONTH ? Math.floor((value % YEAR) / MONTH) : 0;
  value = months ? value - months * MONTH : value;

  week = value >= WEEK ? Math.floor((value % YEAR) / WEEK) : 0;
  value = week ? value - week * WEEK : value;

  days = value < WEEK ? Math.floor((value % YEAR) % WEEK) : 0;

  const date = `${year} years ${months} months ${week} weeks ${days} days`;

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 text-left sm:px-2 flex-[2_2_0%]">
        <h3 className={verticalTitleClass}>{props.title}</h3>
        <h5
          className="text-lg font-normal text-gray-800"
          style={{ marginTop: "-4px" }}
        >
          {props.subtitle?.includes("Settlin") ? (
            <>
              <Link href="https://settlin.in/">{props.subtitle}</Link>
            </>
          ) : (
            props.subtitle
          )}

          {props.count && (
            <div className="text-sm leading-1 flex items-center">
              <div className="pr-1">
                <BsFillBriefcaseFill />
              </div>
              <p>{date}</p>
            </div>
          )}
        </h5>
        <div className="mt-6 text-md leading-1">{props.description}</div>
      </div>

      {props.image && (
        <div className="flex md:justify-center w-1/2 md:w-1 flex-1 bg-white md:bg-inherit p-2 rounded-full">
          <Image
            width="200%"
            height="200%"
            src={`${router.basePath}${props.image}`}
            alt={props.imageAlt}
          />
        </div>
      )}
    </div>
  );
};

const VerticalFeatureCard = (props: IVerticalFeatureRowProps) => {
  const padding = className({
    "pl-2": props.padding,
  });

  // const router = useRouter();
  return (
    <div className="card w-full md:w-56 my-4 md:my-0 glass text-gray-800">
      <div className="card-body">
        <div className="flex">
          {props.image && (
            <Image
              src={props.image}
              width="40px"
              height="30px"
              alt="company"
              className="m-2"
            />
          )}
          <div className={padding}>
            <h2 className="card-title">{props.title}</h2>
            <h5 className="text-md font-normal text-gray-600">
              {props.subtitle}
            </h5>
          </div>
        </div>
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
