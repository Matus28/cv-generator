import * as React from "react";
import { WorkExperienceType } from "../../types/types";
import { StyledButton } from "../Button/StyledButton";
import { WorkExperienceInputs } from "../../data/inputData";
import { Input } from "../Input/Input";
import styles from "./WorkExperienceForm.module.scss";

type WorkExperienceFormProps = {
  data: WorkExperienceType;
  cancel: () => void;
  onChange: (fieldName: string, value: string | string[] | number) => void;
  onSave: () => void;
};

type inputConfigType = {
  id: string;
  type: string;
  label: string;
  elementType: string;
  isRequired: boolean;
  newSection?: string;
  category: string;
};

export const WorkExperienceForm = (
  props: WorkExperienceFormProps
): JSX.Element => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    props.onSave();
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={onSubmit}>
        {WorkExperienceInputs.map(
          (inputConfig: inputConfigType, index: number) => (
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
                  value={props.data[inputConfig.id as keyof WorkExperienceType]}
                  onChange={props.onChange}
                  isRequired={inputConfig.isRequired}
                  isEditMode={true}
                />
              </div>
            </React.Fragment>
          )
        )}
        <div className={styles.control}>
          <StyledButton type="submit">Save</StyledButton>
          <StyledButton onClick={props.cancel}>Cancel</StyledButton>
        </div>
      </form>
    </div>
  );
};
