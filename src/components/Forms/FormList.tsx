import {
  EducationType,
  SkillType,
  WorkExperienceType,
} from "../../types/types";
import { FormElement } from "./FormElement";
import styles from "./FormList.module.scss";

type FormListProps = {
  titleType: string;
  data: EducationType[] | WorkExperienceType[] | SkillType[];
  onEdit: (id: string) => void;
  onRemove: (id: string) => void;
};

export const FormList = (props: FormListProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <ul>
        {props.data.map(
          (
            element: EducationType | WorkExperienceType | SkillType,
            index: number
          ) => (
            <FormElement
              key={index}
              elementId={element.id}
              title={
                props.titleType === "institution" && "institution" in element
                  ? element.institution
                  : props.titleType === "employer" && "employer" in element
                  ? element.employer
                  : props.titleType === "field" && "field" in element
                  ? element.field
                  : ""
              }
              onEdit={props.onEdit}
              onRemove={props.onRemove}
            />
          )
        )}
      </ul>
    </div>
  );
};
