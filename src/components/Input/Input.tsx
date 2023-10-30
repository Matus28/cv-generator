import { Dispatch, SetStateAction } from "react";
import { PhotoDialog } from "../Dialog/PhotoDialog";
import styles from "./Input.module.scss";
import { TextField } from "@mui/material";

interface InputProps {
  id: string;
  type: string;
  label: string;
  elementType: string;
  value: string;
  file: File | null;
  onChange: Dispatch<SetStateAction<string>>;
  onChangeFile?: Dispatch<SetStateAction<File | null>>;
  isRequired?: boolean;
}

export const Input = (props: InputProps): JSX.Element => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    props.onChange(event.currentTarget.value);
    console.log(event.currentTarget.value);
  };

  return (
    <div className={styles.wrapper}>
      <label>{`${props.label}${props.isRequired ? "*" : ""}`}</label>
      {props.elementType === "input" && (
        <TextField
          id={props.id}
          className={styles.textfield}
          type={props.type}
          value={props.value}
          required={props.isRequired}
          onChange={handleChange}
        />
      )}
      {props.elementType === "textarea" && (
        <textarea id={props.id} value={props.value} />
      )}
      {props.elementType === "image" && (
        <PhotoDialog
          label={props.label}
          value={props.value}
          file={props.file}
          onChange={props.onChange}
          onChangeFile={props.onChangeFile}
        />
      )}
    </div>
  );
};
