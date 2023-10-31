import * as React from "react";
import { Button, TextField } from "@mui/material";
import UserProfile from "../../assets/user-profile-icon.svg";
import styles from "./DragAndDrop.module.scss";

interface DragAndDropProps {
  preview: string;
  value: string;
  onSetPreview: React.Dispatch<React.SetStateAction<string>>;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  onSetOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DragAndDrop = (props: DragAndDropProps): JSX.Element => {
  const [dragActive, setDragActive] = React.useState<boolean>(false);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleDrag = (
    event: React.DragEvent<HTMLFormElement | HTMLDivElement>
  ): void => {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === "dragenter" || event.type === "dragover") {
      setDragActive(true);
    } else if (event.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files) {
      props.onSetPreview(URL.createObjectURL(event.dataTransfer.files[0]));
    }
    setDragActive(false);
  };

  const handleChangeFile = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.files) {
      const file = event.target.files[0];
      props.onSetPreview(URL.createObjectURL(file));
    }
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    // const input = event.currentTarget.elements.namedItem(
    //   "photo"
    // ) as HTMLInputElement;
    // if (input.files && props.onChangeFile) {
    //   console.log(input?.files);
    //   props.onChange(URL.createObjectURL(input?.files[0]));
    // }
    if (props.preview !== UserProfile) {
      props.onChange(props.preview);
    }

    props.onSetPreview(UserProfile);
    props.onSetOpen(false);
  };

  const handleButtonClick = (): void => {
    const input = inputRef.current as HTMLInputElement;
    input.click();
  };

  return (
    <form
      id="photo-form"
      className={styles.form}
      onDragEnter={handleDrag}
      onSubmit={onSubmitHandler}
    >
      <TextField
        className={styles.input}
        id="standard-basic"
        name="photo"
        type="file"
        inputRef={inputRef}
        onChange={handleChangeFile}
        inputProps={{
          accept: "image/*",
        }}
      ></TextField>
      <div
        className={`${styles.profile} ${
          props.preview !== UserProfile ? styles.uploaded : ""
        }`}
      >
        <Button onClick={handleButtonClick}>
          <img src={props.preview} alt="Photo of user." />
          {props.preview === UserProfile && (
            <p>
              <span>Click</span>
              or <span>Drag</span> your photo here to upload.
            </p>
          )}
        </Button>
      </div>
      {dragActive && (
        <div
          id="drag-file-element"
          className={styles.placement}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
    </form>
  );
};
