import { Button } from "@mui/material";
import { ReactNode } from "react";
import styles from "./StyledButton.module.scss";

type StyledButtonProps = {
  children: ReactNode;
  type?: "button" | "reset" | "submit";
  size?: string;
  onClick?: () => void;
};

export const StyledButton = (props: StyledButtonProps): JSX.Element => {
  const className = `${styles.button} ${props.size ? styles[props.size] : ""}`;

  return (
    <Button
      type={props.type ?? "button"}
      className={className}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};
