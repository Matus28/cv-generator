import * as React from "react";
import uniqid from "uniqid";
import { StyledButton } from "../Button/StyledButton";
import { WorkExperienceType } from "../../types/types";
import { FormList } from "./FormList";
import { Form } from "./Form";
import { WorkExperienceInputs } from "../../data/inputData";
import styles from "./WorkExperience.module.scss";

type Mode = "preview" | "edit" | "add";

type WorkExperienceProps = {
  data: WorkExperienceType[];
};

export const WorkExperience = ({ data }: WorkExperienceProps): JSX.Element => {
  const [workExperience, setWorkExperience] = React.useState<
    WorkExperienceType[]
  >(data ?? []);
  const [editedWorkExperience, setEditedWorkExperience] =
    React.useState<WorkExperienceType | null>(null);
  const [mode, setMode] = React.useState<Mode>("preview");

  const handleRemove = (id: string): void => {
    const newValue = workExperience.filter(
      (element: WorkExperienceType) => element.id !== id
    );
    setWorkExperience(newValue);
  };

  const handleEdit = (id: string): void => {
    const selectedWorkExperience = workExperience.filter(
      (element: WorkExperienceType) => element.id === id
    )[0];
    setEditedWorkExperience(selectedWorkExperience);
    setMode("edit");
  };

  const handleAdd = (): void => {
    const id = uniqid();

    setEditedWorkExperience({
      id: id,
      employer: "",
      title: "",
      startYear: new Date().getFullYear(),
      startMonth: -1,
      endYear: new Date().getFullYear(),
      endMonth: -1,
      description: "",
    });

    setMode("add");
  };

  const handleInputChange = (
    fieldName: string,
    value: string | number
  ): void => {
    if (editedWorkExperience) {
      setEditedWorkExperience({
        ...editedWorkExperience,
        [fieldName]: value,
      });
    }
  };

  const handleCancel = (): void => {
    setMode("preview");
  };

  const handleSave = (): void => {
    if (mode === "edit") {
      const newWorkExperienceData = workExperience.map(
        (element: WorkExperienceType) => {
          if (element.id === editedWorkExperience?.id) {
            return editedWorkExperience;
          }
          return element;
        }
      );
      setWorkExperience(newWorkExperienceData);
      setMode("preview");
      return;
    } else if (mode === "add" && editedWorkExperience) {
      const newWorkExperienceData = [...workExperience, editedWorkExperience];
      setWorkExperience(newWorkExperienceData);
      setMode("preview");
      return;
    }

    setMode("edit");
  };

  return (
    <div className={styles.wrapper}>
      {mode === "preview" && (
        <FormList
          titleType="employer"
          data={workExperience}
          onEdit={handleEdit}
          onRemove={handleRemove}
        />
      )}
      {(mode === "edit" || mode === "add") && editedWorkExperience && (
        <Form
          dataType="workExperience"
          inputData={WorkExperienceInputs}
          data={editedWorkExperience}
          cancel={handleCancel}
          onChange={handleInputChange}
          onSave={handleSave}
        />
      )}
      {mode === "preview" && (
        <StyledButton onClick={handleAdd}>Add</StyledButton>
      )}
    </div>
  );
};
