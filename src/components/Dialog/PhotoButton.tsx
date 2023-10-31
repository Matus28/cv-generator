import * as React from "react";
import DefaultImage from "../../assets/upload-icon.svg";
import styles from "./PhotoButton.module.scss";
import { Button } from "@mui/material";

interface PhotoButtonProps {
  value: string;
  onOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PhotoButton = (props: PhotoButtonProps): JSX.Element => {
  const handleClick = (): void => {
    props.onOpen(true);
  };

  return (
    <div className={styles.wrapper}>
      <Button type="button" onClick={handleClick}>
        <img
          src={props.value}
          alt="Photo of cv applicant."
          className={`${props.value === DefaultImage ? styles.default : ""}`}
        />
        {props.value === DefaultImage && <p>Add photo (optional)</p>}
      </Button>
    </div>
  );
};
