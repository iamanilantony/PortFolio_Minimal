import React from "react";
import Image from "next/image";

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
};

const WorkExperience = (props: IVerticalFeatureRowProps) => {
  return (
    <div className="card my-4 md:my-4 border-2 border-gray-800">
      <div className="card-body">
        <div>
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
          <div className="flex">
            <div>
              <h2 className="card-title">{props.title}</h2>
              <h5 className="text-md font-normal text-gray-600">
                {props.subtitle}
              </h5>
            </div>
          </div>
          <p className="text-sm w-full md:w-56">{props.description}</p>
          {props.links && (
            <div className="flex text-xl">
              <label
                htmlFor="my-modal-4"
                className="btn btn-xs mt-2 text-gray-900 bg-gray-100 hover:bg-gray-200 hover:text-gray-800 dark:text-gray-50 dark:bg-gray-900"
              >
                {/* <BsBoxArrowInUpRight /> */}
              </label>
              <input type="checkbox" id="my-modal-4" className="modal-toggle" />
              <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label
                  className="modal-box dark:bg-gray-800 bg-white relative"
                  htmlFor=""
                >
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
                    <div className="pr-2">{/* <AiFillGithub /> */}</div>
                    <div>{/* <AiOutlineLink /> */}</div>
                  </div>
                </label>
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
