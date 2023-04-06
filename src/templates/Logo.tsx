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
            <Link href="https://github.com/anilantony3134">
              <a> Github</a>
            </Link>
          </li>
          <li className="mr-2">
            <Link href="https://www.linkedin.com/in/iamanilantony/">
              <a>LinkedIn</a>
            </Link>
          </li>
          <li className="mr-2">
            <Link href="https://twitter.com/iamanilantony">
              <a>Twitter</a>
            </Link>
          </li>
          <li className="mr-2">
            <Link href="https://twitter.com/iamanilantony">
              <a>Resume</a>
            </Link>
          </li>
        </ul>
      </nav>
    </span>
  );
};

export { Logo };
