import Link from "next/link";
// import { AppConfig } from "../utils/AppConfig";

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  // const size = props.xl ? "44" : "32";
  const fontStyle = props.xl
    ? "font-semibold text-3xl"
    : "font-semibold text-xl";

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <nav>
        <ul className="navbar flex items-center font-medium text-xl text-gray-800">
          <li className="mr-2">
            <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
              <a> Home</a>
            </Link>
          </li>
          <li className="mr-2">
            <Link href="/">
              <a>Works</a>
            </Link>
          </li>
          <li className="mr-2">
            <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
              <a>Blogs</a>
            </Link>
          </li>
        </ul>
      </nav>
    </span>
  );
};

export { Logo };
