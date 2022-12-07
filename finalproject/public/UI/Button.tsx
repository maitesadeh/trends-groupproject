import React from "react";
import styles from "./Button.module.css";

const Button = (props: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  return <button className={styles.btn}>{props.name}</button>;
};

export default Button;
