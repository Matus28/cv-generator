import { EducationType } from "../../types/types";
import { RiEdit2Line } from "react-icons/ri";
import { ImBin } from "react-icons/im";
import styles from "./EducationElement.module.scss";
import { StyledButton } from "../Button/StyledButton";

type EducationElementProps = {
  data: EducationType;
  onEdit: (id: string) => void;
  onRemove: (id: string) => void;
};

export const EducationElement = (props: EducationElementProps): JSX.Element => {
  const handleEdit = (): void => {
    props.onEdit(props.data.id);
  };

  const handleRemove = (): void => {
    props.onRemove(props.data.id);
  };

  return (
    <li className={styles.element}>
      <div className={styles.title}>{props.data.institution}</div>
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
