import "./Button.css";
import cn from "classnames";
export const Button = (props) => {
  const thisProps = { ...props, className: cn("button", props.className) };
  return <button {...thisProps}>{thisProps.children}</button>;
};
