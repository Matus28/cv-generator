import * as React from "react";
import uniqid from "uniqid";
import { EducationType } from "../../types/types";
import { StyledButton } from "../Button/StyledButton";
import { FormList } from "./FormList";
import { Form } from "./Form";
import { EducationInputs } from "../../data/inputData";
import styles from "./Education.module.scss";

type Mode = "preview" | "edit" | "add";

type EducationProps = {
  data: EducationType[];
};

export const Education = ({ data }: EducationProps): JSX.Element => {
  const [education, setEducation] = React.useState<EducationType[]>(data ?? []);
  const [editedEducation, setEditedEducation] =
    React.useState<EducationType | null>(null);
  const [mode, setMode] = React.useState<Mode>("preview");

  const handleRemove = (id: string): void => {
    const newValue = education.filter(
      (element: EducationType) => element.id !== id
    );
    setEducation(newValue);
  };

  const handleEdit = (id: string): void => {
    const selectedEducation = education.filter(
      (element: EducationType) => element.id === id
    )[0];
    setEditedEducation(selectedEducation);
    setMode("edit");
  };

  const handleAdd = (): void => {
    const id = uniqid();

    setEditedEducation({
      id: id,
      institution: "",
      department: "",
      degreeType: "",
      city: "",
      startYear: new Date().getFullYear(),
      startMonth: -1,
      endYear: new Date().getFullYear(),
      endMonth: -1,
    });

    setMode("add");
  };

  const handleInputChange = (
    fieldName: string,
    value: string | number
  ): void => {
    if (editedEducation) {
      setEditedEducation({
        ...editedEducation,
        [fieldName]: value,
      });
    }
  };

  const handleCancel = (): void => {
    setMode("preview");
  };

  const handleSave = (): void => {
    if (mode === "edit") {
      const newEducationData = education.map((element: EducationType) => {
        if (element.id === editedEducation?.id) {
          return editedEducation;
        }
        return element;
      });
      setEducation(newEducationData);
      setMode("preview");
      return;
    } else if (mode === "add" && editedEducation) {
      const newEducationData = [...education, editedEducation];
      setEducation(newEducationData);
      setMode("preview");
      return;
    }

    setMode("edit");
  };

  return (
    <div className={styles.wrapper}>
      {mode === "preview" && (
        <FormList
          titleType="institution"
          data={education}
          onEdit={handleEdit}
          onRemove={handleRemove}
        />
      )}
      {(mode === "edit" || mode === "add") && editedEducation && (
        <Form
          dataType="education"
          inputData={EducationInputs}
          data={editedEducation}
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
