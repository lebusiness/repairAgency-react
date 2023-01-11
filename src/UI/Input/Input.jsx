import "./Input.css";
import cn from "classnames";

export const Input = (props) => {
  const thisProps = { ...props, className: cn("input", props.className) };

  return (
    <>
      {props.label && (
        <label className="label" htmlFor={props.id}>
          {props.label}
        </label>
      )}
      <input className="input" {...thisProps} />
    </>
  );
};
