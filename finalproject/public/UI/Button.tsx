import React, { MouseEventHandler } from "react";
import styles from "./Button.module.css";

const Button = (props: {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  name:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <button className={styles.btn} onClick={props.onClick}>
      {props.name}
    </button>
  );
};

export default Button;
