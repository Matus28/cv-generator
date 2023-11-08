import { RiEdit2Line } from "react-icons/ri";
import { ImBin } from "react-icons/im";
import { StyledButton } from "../Button/StyledButton";
import { WorkExperienceType } from "../../types/types";
import styles from "./WorkExperienceElement.module.scss";

type WorkExperienceElementProps = {
  data: WorkExperienceType;
  onEdit: (id: string) => void;
  onRemove: (id: string) => void;
};

export const WorkExperienceElement = (
  props: WorkExperienceElementProps
): JSX.Element => {
  const handleEdit = (): void => {
    props.onEdit(props.data.id);
  };

  const handleRemove = (): void => {
    props.onRemove(props.data.id);
  };

  return (
    <li className={styles.element}>
      <div className={styles.title}>{props.data.employer}</div>
      <div className={styles.buttons}>
        <StyledButton onClick={handleEdit}>
          <RiEdit2Line />
        </StyledButton>
        <StyledButton onClick={handleRemove}>
          <ImBin />
        </StyledButton>
      </div>
    </li>
  );
};
