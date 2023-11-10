import { RiEdit2Line } from "react-icons/ri";
import { ImBin } from "react-icons/im";
import { StyledButton } from "../Button/StyledButton";
import styles from "./FormElement.module.scss";

type FormElementProps = {
  elementId: string;
  title: string;
  onEdit: (id: string) => void;
  onRemove: (id: string) => void;
};

export const FormElement = (props: FormElementProps): JSX.Element => {
  const handleEdit = (): void => {
    props.onEdit(props.elementId);
  };

  const handleRemove = (): void => {
    props.onRemove(props.elementId);
  };

  return (
    <li className={styles.element}>
      <div className={styles.title}>{props.title}</div>
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
