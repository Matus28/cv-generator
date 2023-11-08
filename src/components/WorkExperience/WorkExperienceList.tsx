import { WorkExperienceElement } from "./WorkExperienceElement";
import { WorkExperienceType } from "../../types/types";
import styles from "./WorkExperienceList.module.scss";

type WorkExperienceListProps = {
  data: WorkExperienceType[];
  onEdit: (id: string) => void;
  onRemove: (id: string) => void;
};

export const WorkExperienceList = (
  props: WorkExperienceListProps
): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <ul>
        {props.data.map((element: WorkExperienceType, index: number) => (
          <WorkExperienceElement
            key={index}
            data={element}
            onEdit={props.onEdit}
            onRemove={props.onRemove}
          />
        ))}
      </ul>
    </div>
  );
};
