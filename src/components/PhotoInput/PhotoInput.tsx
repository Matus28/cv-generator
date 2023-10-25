import * as React from "react";
import styles from "./PhotoInput.module.scss";
import { PhotoButton } from "./PhotoButton";

interface PhotoInputProps {
  label: string;
  value: string;
}

export const PhotoInput = (props: PhotoInputProps): JSX.Element => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      {open ? (
        <input
          id={props.label}
          type="file"
          value={props.value}
          accept="image/x-png,image/gif,image/jpeg"
        />
      ) : (
        <PhotoButton />
      )}
    </div>
  );
};
