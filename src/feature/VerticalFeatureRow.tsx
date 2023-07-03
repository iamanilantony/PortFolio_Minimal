import className from "classnames";
import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import {
  BsFillBriefcaseFill,
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";
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
  points?: string[];
  icon?: ReactNode;
  iconColor?: string;
  stack?: string[];
  hover?: string;
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

  const verticalTitleClass = className("font-bold", {
    "text-xl": props.smallTitle,
    "text-5xl": !props.smallTitle,
  });

  const router = useRouter();

  const timer = new Timer({
    label: "test-timer",
    startTimestamp: 1653000000000, // Fri May 20 2022 04:10:40 GMT+0530
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
      <div className="w-full sm:w-1/2 text-left sm:px-2 flex-[2_2_0%] dark:text-white text-black">
        <h3 className={verticalTitleClass}>{props.title}</h3>
        <h5
          className="text-lg font-normal text-gray-800 dark:text-white"
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
            <div className="text-sm leading-1 flex items-center mt-2">
              <div className="pr-1">
                <BsFillBriefcaseFill />
              </div>
              <p>{date}</p>
            </div>
          )}
        </h5>

        {props.count && (
          <div className="text-md leading-1 flex items-center mt-4">
            <div className="pr-4 cursor-pointer">
              <Link href="https://www.linkedin.com/in/iamanilantony/" passHref>
                <a title="LinkedIn">
                  <BsLinkedin className="text-blue-600" />
                </a>
              </Link>
            </div>
            <div className="pr-4 cursor-pointer">
              <Link href="https://github.com/iamanilantony" passHref>
                <a title="Github">
                  <BsGithub />
                </a>
              </Link>
            </div>
            <div className="pr-4 cursor-pointer">
              <Link href="https://twitter.com/iamanilantony" passHref>
                <a title="Twitter">
                  <BsTwitter className="text-blue-400" />
                </a>
              </Link>
            </div>
            <div className="cursor-pointer">
              <Link
                href="https://drive.google.com/file/d/1eSFa_Uhmt_k7Fpl9ma4nwOLsB2eAWdqN/view?usp=sharing"
                passHref
              >
                <a title="Resume">
                  <HiDocumentText className="text-green-600" />
                </a>
              </Link>
            </div>
          </div>
        )}
        <div className="mt-6 text-md leading-1 dark:text-[#888888] ">
          {props.description}
        </div>
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
  const color = `text-4xl text-${
    props.iconColor ? props.iconColor : "red"
  }-400`;

  return (
    <>
      <div className="card my-4 md:my-4 w-full md:w-60 border-2 border-gray-200 dark:border-gray-800 transform hover:scale-105 hover:translate-y-[-5px] transition duration-300">
        <div className="card-body">
          {props.image && (
            <div className="flex">
              <Image
                src={props.image}
                width="40px"
                height="40px"
                alt="company"
                className="m-2"
              />
            </div>
          )}
          {props.icon && (
            <div className={`text-4xl ${color}`}>{props.icon}</div>
          )}
          <div className="flex">
            <div>
              <h2 className="card-title">{props.title}</h2>
              <h5 className="text-md font-normal text-gray-600">
                {props.subtitle}
              </h5>
            </div>
          </div>
          <p className="text-sm">{props.description}</p>
          {props.stack && (
            <div className="grid grid-cols-3 gap-2 p-0 m-0 text-gray-800">
              {props.stack.map((e, ind) => (
                <span
                  className="text-xs border border-gray-800 mr-2 rounded-md px-1 w-max dark:text-gray-400"
                  key={ind}
                >
                  <i>{e}</i>
                </span>
              ))}
            </div>
          )}
          {props.links && (
            <div className="flex text-xl">
              <label
                htmlFor="my-modal-4"
                className="btn btn-xs mt-2 text-gray-900 bg-gray-100 hover:bg-gray-200 hover:text-gray-800 dark:text-gray-50 dark:bg-gray-900"
              >
                Explore &nbsp; <BsBoxArrowInUpRight />
              </label>
            </div>
          )}
        </div>
      </div>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label
          className="modal-box dark:bg-gray-800 bg-white relative"
          htmlFor=""
        >
          <div
            className={`group-hover:block bg-white shadow-lg rounded-lg mb-4`}
          >
            {props.hover && (
              <Image
                src={props.hover}
                alt="Popup Image"
                className="w-64 h-44"
                width={1138}
                height={654}
              />
            )}
          </div>
          <h2 className="card-title">{props.title}</h2>
          {props.points?.length && (
            <ul className="list-disc">
              {props.points.map((e, key) => (
                <li key={key} className="text-xs my-2">
                  {e}
                </li>
              ))}
            </ul>
          )}
          <div className="flex text-xl mt-4">
            <div className="pr-2">
              <AiFillGithub />
            </div>
            <div>
              <AiOutlineLink />
            </div>
          </div>
        </label>
      </label>
    </>
  );
};

export { VerticalFeatureRow, VerticalFeatureCard };
