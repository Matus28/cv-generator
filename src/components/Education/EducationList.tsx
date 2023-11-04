import { EducationType } from "../../types/types";
import { EducationElement } from "./EducationElement";
import styles from "./EducationList.module.scss";

type EducationListProps = {
  data: EducationType[];
  onEdit: (id: string) => void;
  onRemove: (id: string) => void;
};

export const EducationList = (props: EducationListProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <ul>
        {props.data.map((element: EducationType, index: number) => (
          <EducationElement
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
