import * as React from "react";
import { Button, TextField } from "@mui/material";
import UserProfile from "../../assets/user-profile-icon.svg";
import styles from "./DragAndDrop.module.scss";

interface DragAndDropProps {
  onChange: React.Dispatch<React.SetStateAction<string>>;
  onChangeFile: React.Dispatch<React.SetStateAction<File | null>> | undefined;
  onSetOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DragAndDrop = (props: DragAndDropProps): JSX.Element => {
  const [dragActive, setDragActive] = React.useState(false);

  const inputRef = React.useRef(null);

  const handleDrag = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === "dragenter" || event.type === "dragover") {
      setDragActive(true);
    } else if (event.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleChangeFile = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.files && props.onChangeFile) {
      const file = event.target.files[0];
      props.onChangeFile(file);
    }
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const input = event.currentTarget.elements.namedItem(
      "photo"
    ) as HTMLInputElement;
    if (input.files && props.onChangeFile) {
      props.onChange(URL.createObjectURL(input?.files[0]));
    }

    props.onSetOpen(false);
  };

  return (
    <form id="photo-form" onDragEnter={handleDrag} onSubmit={onSubmitHandler}>
      <TextField
        className={styles.input}
        id="standard-basic"
        name="photo"
        type="file"
        ref={inputRef}
        onChange={handleChangeFile}
        inputProps={{
          accept: "image/*",
        }}
      ></TextField>
      <Button className={styles.profile}>
        <img src={UserProfile} alt="Photo of user." />
        <p>
          <span>Click</span> or <span>drag</span> your photo here to upload.
        </p>
      </Button>
    </form>
  );
};
