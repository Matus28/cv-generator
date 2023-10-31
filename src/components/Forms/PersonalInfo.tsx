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

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(personalInfo);
  };

  const handleInputChange = (fieldName: string, value: string): void => {
    setPersonalInfo({
      ...personalInfo,
      [fieldName]: value,
    });
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={onSubmit}>
        {PersonalInfoInputs.map(
          (inputConfig: inputConfigType, index: number) => (
            <React.Fragment key={index}>
              {inputConfig.newSection && (
                <h2 className={inputConfig.category}>
                  {inputConfig.newSection}
                </h2>
              )}
              {inputConfig.newSection && <hr />}
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
                />
              </div>
            </React.Fragment>
          )
        )}
        <Button type="submit" className={styles.edit}>
          Edit
        </Button>
      </form>
    </div>
  );
};
