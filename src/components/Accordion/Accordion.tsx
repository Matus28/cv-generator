import * as React from "react";
// import { IoIosArrowDropdown } from "react-icons/io";
import { AiOutlineDown } from "react-icons/ai";
import styles from "./Accordion.module.scss";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export const Accordion = ({ title, children }: AccordionProps): JSX.Element => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClick = (): void => {
    setOpen(!open);
  };

  return (
    <div className={`${styles.wrapper} ${open ? styles.open : ""}`}>
      <div className={styles.heading}>
        <div className={styles.title}>
          <h4>{title}</h4>
        </div>
        <button onClick={handleClick}>
          <AiOutlineDown />
        </button>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
