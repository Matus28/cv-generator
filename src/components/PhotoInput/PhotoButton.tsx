import * as React from "react";
import DefaultImage from "../../assets/upload-icon.svg";
import styles from "./PhotoButton.module.scss";

export const PhotoButton = (): JSX.Element => {
  const [image, setImage] = React.useState<string>(DefaultImage);

  return (
    <div className={styles.wrapper} tabIndex={1}>
      <img src={image} alt="Photo of cv applicant." />
      {image === DefaultImage && <p>Add photo (optional)</p>}
    </div>
  );
};
