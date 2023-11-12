import * as React from "react";
import uniqid from "uniqid";
import { SkillType } from "../../types/types";
import { StyledButton } from "../Button/StyledButton";
import { FormList } from "./FormList";
import { Form } from "./Form";
import { SkillInputs } from "../../data/inputData";
import styles from "./Skill.module.scss";

type Mode = "preview" | "edit" | "add";

type SkillProps = {
  data: SkillType[];
};

export const Skill = ({ data }: SkillProps): JSX.Element => {
  const [skill, setSkill] = React.useState<SkillType[]>(data);
  const [editedSkill, setEditedSkill] = React.useState<SkillType | null>(null);
  const [mode, setMode] = React.useState<Mode>("preview");

  const handleRemove = (id: string): void => {
    const newValue = skill.filter((element: SkillType) => element.id !== id);
    setSkill(newValue);
  };

  const handleEdit = (id: string): void => {
    const selectedSkill = skill.filter(
      (element: SkillType) => element.id === id
    )[0];
    setEditedSkill(selectedSkill);
    setMode("edit");
  };

  const handleAdd = (): void => {
    const id = uniqid();

    setEditedSkill({
      id: id,
      field: "",
      skill: [],
    });

    setMode("add");
  };

  const handleInputChange = (
    fieldName: string,
    value: string | number
  ): void => {
    if (editedSkill) {
      setEditedSkill({
        ...editedSkill,
        [fieldName]: value,
      });
    }
  };

  const handleCancel = (): void => {
    setMode("preview");
  };

  const handleSave = (): void => {
    if (mode === "edit") {
      const newSkillData = skill.map((element: SkillType) => {
        if (element.id === editedSkill?.id) {
          return editedSkill;
        }
        return element;
      });
      setSkill(newSkillData);
      setMode("preview");
      return;
    } else if (mode === "add" && editedSkill) {
      const newSkillData = [...skill, editedSkill];
      setSkill(newSkillData);
      setMode("preview");
      return;
    }

    setMode("edit");
  };

  return (
    <div className={styles.wrapper}>
      {mode === "preview" && (
        <FormList
          titleType="field"
          data={skill}
          onEdit={handleEdit}
          onRemove={handleRemove}
        />
      )}
      {(mode === "edit" || mode === "add") && editedSkill && (
        <Form
          dataType="skill"
          inputData={SkillInputs}
          data={editedSkill}
          isEditMode={true}
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
