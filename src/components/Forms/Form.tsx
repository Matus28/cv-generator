import * as React from "react";
import { EducationType, WorkExperienceType } from "../../types/types";
import { StyledButton } from "../Button/StyledButton";
import { Input } from "../Input/Input";
import styles from "./Form.module.scss";

type FormData = EducationType | WorkExperienceType;

type FormProps = {
  dataType: string;
  inputData: inputConfigType[];
  data: FormData;
  cancel: () => void;
  onChange: (fieldName: string, value: string | number) => void;
  onSave: () => void;
};

interface inputConfigType {
  id: string;
  type: string;
  label: string;
  elementType: string;
  isRequired: boolean;
  newSection?: string;
  category: string;
}

export const Form = (props: FormProps): JSX.Element => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    props.onSave();
  };

  const getFormStyle = (): string => {
    switch (props.dataType) {
      case "education":
        return styles.education;
      case "workExperience":
        return styles.work;
      default:
        return "";
    }
  };

  return (
    <div className={`${styles.wrapper} ${getFormStyle()}`}>
      <form onSubmit={onSubmit}>
        {props.inputData.map((inputConfig: inputConfigType, index: number) => (
          <React.Fragment key={index}>
            {inputConfig.newSection && (
              <h2 className={styles[inputConfig.category]}>
                {inputConfig.newSection}
              </h2>
            )}
            <div id={styles[inputConfig.id]}>
              <Input
                key={inputConfig.id}
                id={inputConfig.id}
                type={inputConfig.type}
                label={inputConfig.label}
                elementType={inputConfig.elementType}
                value={props.data[inputConfig.id as keyof FormData]}
                onChange={props.onChange}
                isRequired={inputConfig.isRequired}
                isEditMode={true}
              />
            </div>
          </React.Fragment>
        ))}
        <div className={styles.control}>
          <StyledButton type="submit">Save</StyledButton>
          <StyledButton onClick={props.cancel}>Cancel</StyledButton>
        </div>
      </form>
    </div>
  );
};
