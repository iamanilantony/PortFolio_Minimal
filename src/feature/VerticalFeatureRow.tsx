import className from "classnames";
import Image from "next/image";
import { useRouter } from "next/router";

type IVerticalFeatureRowProps = {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    "mt-10",
    "flex",
    "flex-wrap",
    "items-center",
    {
      "flex-row-reverse": props.reverse,
    }
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 text-left sm:px-6">
        <h3 className="text-4xl text-gray-900 font-bold">{props.title}</h3>
        <h5 className="text-xl">{props.subtitle}</h5>
        <div className="mt-6 text-md leading-2">{props.description}</div>
      </div>

      <div className="w-full sm:w-1/2 p-6">
        <Image
          width="200"
          height="200"
          src={`${router.basePath}${props.image}`}
          alt={props.imageAlt}
        />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
