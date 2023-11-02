import * as React from "react";
import { Input } from "../Input/Input";
import DefaultImage from "../../assets/upload-icon.svg";
import styles from "./PersonalInfo.module.scss";
import { PersonalInformation } from "../../types/types";
import { PersonalInfoInputs } from "../../data/inputData";
import { Button } from "@mui/material";

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

export const PersonalInfo = (): JSX.Element => {
  const [personalInfo, setPersonalInfo] =
    React.useState<PersonalInformation>(PersonalInfoInit);
  const [prevPersonalInfo, setPrevPersonalInfo] =
    React.useState<PersonalInformation>(PersonalInfoInit);
  const [editMode, setEditMode] = React.useState<boolean>(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log("wiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");

    if (editMode) {
      console.log(personalInfo);
      setEditMode(false);
      return;
    }
    setPrevPersonalInfo(personalInfo);

    setEditMode(true);
  };

  const handleInputChange = (fieldName: string, value: string): void => {
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
                  value={
                    personalInfo[inputConfig.id as keyof PersonalInformation]
                  }
                  onChange={handleInputChange}
                  isRequired={inputConfig.isRequired}
                  isEditMode={editMode}
                />
              </div>
            </React.Fragment>
          )
        )}
        {editMode ? (
          <>
            <Button type="submit" className={styles.save}>
              Save
            </Button>
            <Button className={styles.cancel} onClick={handleCancelEdition}>
              Cancel
            </Button>
          </>
        ) : (
          <Button type="submit" className={styles.edit}>
            Edit
          </Button>
        )}
      </form>
    </div>
  );
};
