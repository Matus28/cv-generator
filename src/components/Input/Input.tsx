import { PhotoInput } from "../PhotoInput/PhotoInput";
import styles from "./Input.module.scss";

interface InputProps {
  id: string;
  type: string;
  label: string;
  elementType: string;
  value: string;
  isRequired?: boolean;
}

export const Input = (props: InputProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <label>{`${props.label}${props.isRequired ? "*" : ""}`}</label>
      {props.elementType === "input" && (
        <input
          id={props.id}
          type={props.type}
          value={props.value}
          required={props.isRequired}
        />
      )}
      {props.elementType === "textarea" && (
        <textarea id={props.id} value={props.value} />
      )}
      {props.elementType === "image" && (
        <PhotoInput label={props.label} value={props.value} />
      )}
    </div>
  );
};
