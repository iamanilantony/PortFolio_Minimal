import { ReactNode } from "react";

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  icon?: ReactNode;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`max-w-screen-md mx-auto px-2 md:px-0 ${
      props.yPadding ? props.yPadding : "py-12"
    }`}
  >
    {(props.title || props.description) && (
      <div className="mb-12 text-left">
        {props.title && <h2 className="text-3xl font-bold"> {props.title}</h2>}
        {props.description && (
          <div className="mt-4 text-xl md:px-20">{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
