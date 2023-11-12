import { StyledAutocomplete } from "../Autocomplete/StyledAutocomplete";
import { PhotoDialog } from "../Dialog/PhotoDialog";
import { StyledSelect } from "../Select/StyledSelect";
import styles from "./Input.module.scss";
import { TextField, TextareaAutosize } from "@mui/material";

interface InputProps {
  id: string;
  type: string;
  label: string;
  elementType: string;
  value: string | number | string[];
  onChange: (fieldName: string, value: string | string[] | number) => void;
  isRequired?: boolean;
  isEditMode: boolean;
}

export const Input = (props: InputProps): JSX.Element => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const fieldName = event.currentTarget.name;
    const value = event.currentTarget.value;
    props.onChange(fieldName, value);
  };

  const handleChangePhoto = (fieldName: string, newValue: string): void => {
    props.onChange(fieldName, newValue);
  };

  const handleChangeDate = (newValue: number): void => {
    props.onChange(props.id, newValue);
  };

  const handleChangeSkills = (newValue: string[]): void => {
    props.onChange(props.id, newValue);
  };

  return (
    <div className={styles.wrapper}>
      <label>{`${props.label}${props.isRequired ? "*" : ""}`}</label>
      {props.elementType === "input" && (
        <TextField
          id={props.id}
          className={styles.textfield}
          name={props.id}
          type={props.type}
          value={props.value}
          required={props.isRequired}
          onChange={handleChange}
          disabled={!props.isEditMode}
        />
      )}
      {props.elementType === "textarea" && (
        <TextareaAutosize
          id={props.id}
          className={styles.textarea}
          name={props.id}
          value={props.value}
          required={props.isRequired}
          onChange={handleChange}
          minRows={3}
          disabled={!props.isEditMode}
        />
      )}
      {props.elementType === "image" && (
        <PhotoDialog
          label={props.label}
          value={props.value.toString()}
          onChange={(newValue: string) => handleChangePhoto(props.id, newValue)}
          isEditMode={props.isEditMode}
        />
      )}
      {props.elementType === "select" && (
        <StyledSelect
          type={props.type}
          value={props.value as string}
          onChange={handleChangeDate}
        />
      )}
      {props.elementType === "autocomplete" && (
        <StyledAutocomplete value={props.value} onChange={handleChangeSkills} />
      )}
    </div>
  );
};
