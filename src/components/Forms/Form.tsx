import * as React from "react";
import {
  EducationType,
  PersonalInfoType,
  SkillType,
  WorkExperienceType,
} from "../../types/types";
import { StyledButton } from "../Button/StyledButton";
import { Input } from "../Input/Input";
import styles from "./Form.module.scss";

type FormData =
  | PersonalInfoType
  | EducationType
  | WorkExperienceType
  | SkillType;

type FormProps = {
  dataType: string;
  inputData: inputConfigType[];
  data: FormData;
  isEditMode: boolean;
  cancel: () => void;
  onChange: (fieldName: string, value: string | number) => void;
  onSave: () => void;
  onToggleEdit?: () => void;
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

    if (props.isEditMode) {
      props.onSave();
      return;
    }

    if (props.onToggleEdit) {
      props.onToggleEdit();
    }
  };

  const getFormStyle = (): string => {
    switch (props.dataType) {
      case "personalInformation":
        return styles.personal;
      case "education":
        return styles.education;
      case "workExperience":
        return styles.work;
      case "skill":
        return styles.skill;
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
                isEditMode={props.isEditMode}
              />
            </div>
          </React.Fragment>
        ))}
        <div className={styles.control}>
          {props.isEditMode && (
            <React.Fragment>
              <StyledButton type="submit">Save</StyledButton>
              <StyledButton onClick={props.cancel}>Cancel</StyledButton>
            </React.Fragment>
          )}
          {!props.isEditMode && (
            <React.Fragment>
              <StyledButton type="submit">Edit</StyledButton>
            </React.Fragment>
          )}
        </div>
      </form>
    </div>
  );
};
