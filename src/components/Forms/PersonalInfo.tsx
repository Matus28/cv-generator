import * as React from "react";
import { Input } from "../Input/Input";
import DefaultImage from "../../assets/upload-icon.svg";
import styles from "./PersonalInfo.module.scss";
import { PersonalInfoType } from "../../types/types";
import { PersonalInfoInputs } from "../../data/inputData";
import { StyledButton } from "../Button/StyledButton";

const PersonalInfoInit = {
  firstName: "",
  lastName: "",
  photo: DefaultImage,
  email: "",
  phone: "",
  position: "",
  country: "",
  city: "",
  portfolio: "",
  linkedIn: "",
  github: "",
  description: "",
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

type PersonalInfoProps = {
  data: PersonalInfoType;
};

export const PersonalInfo = ({ data }: PersonalInfoProps): JSX.Element => {
  const [personalInfo, setPersonalInfo] = React.useState<PersonalInfoType>(
    data ?? PersonalInfoInit
  );
  const [prevPersonalInfo, setPrevPersonalInfo] =
    React.useState<PersonalInfoType>(data ?? PersonalInfoInit);
  const [editMode, setEditMode] = React.useState<boolean>(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (editMode) {
      console.log(personalInfo);
      setEditMode(false);
      return;
    }
    setPrevPersonalInfo(personalInfo);

    setEditMode(true);
  };

  const handleInputChange = (
    fieldName: string,
    value: string | number
  ): void => {
    setPersonalInfo({
      ...personalInfo,
      [fieldName]: value,
    });
  };

  const handleCancelEdition = (): void => {
    setEditMode(false);
    setPersonalInfo(prevPersonalInfo);
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={onSubmit}>
        {PersonalInfoInputs.map(
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
                  value={personalInfo[inputConfig.id as keyof PersonalInfoType]}
                  onChange={handleInputChange}
                  isRequired={inputConfig.isRequired}
                  isEditMode={editMode}
                />
              </div>
            </React.Fragment>
          )
        )}
        <div className={styles.control}>
          {editMode ? (
            <>
              <StyledButton type="submit">Save</StyledButton>
              <StyledButton onClick={handleCancelEdition}>Cancel</StyledButton>
            </>
          ) : (
            <StyledButton type="submit">Edit</StyledButton>
          )}
        </div>
      </form>
    </div>
  );
};
