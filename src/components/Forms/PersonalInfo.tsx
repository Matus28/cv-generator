import * as React from "react";
import DefaultImage from "../../assets/upload-icon.svg";
import { PersonalInfoType } from "../../types/types";
import { PersonalInfoInputs } from "../../data/inputData";
import { Form } from "./Form";
import styles from "./PersonalInfo.module.scss";

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

  const handleSave = (): void => {
    if (editMode) {
      console.log(personalInfo);
      setEditMode(false);
      setPersonalInfo(prevPersonalInfo);
      return;
    }
    setPrevPersonalInfo(personalInfo);

    setEditMode(true);
  };

  const handleInputChange = (
    fieldName: string,
    value: string | string[] | number
  ): void => {
    setPrevPersonalInfo({
      ...prevPersonalInfo,
      [fieldName]: value,
    });
  };

  const handleCancel = (): void => {
    setEditMode(false);
    setPersonalInfo(prevPersonalInfo);
  };

  const handleToggleEdit = (): void => {
    setEditMode(!editMode);
  };

  return (
    <div className={styles.wrapper}>
      <Form
        dataType="personalInformation"
        inputData={PersonalInfoInputs}
        data={prevPersonalInfo}
        isEditMode={editMode}
        cancel={handleCancel}
        onChange={handleInputChange}
        onSave={handleSave}
        onToggleEdit={handleToggleEdit}
      />
    </div>
  );
};
