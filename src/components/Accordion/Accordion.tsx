import * as React from "react";
import { IoIosArrowUp } from "react-icons/io";
import styles from "./Accordion.module.scss";

type AccordionProps = {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

export const Accordion = ({
  title,
  icon,
  children,
}: AccordionProps): JSX.Element => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleOpenAccordion = (): void => {
    setOpen(!open);
  };

  return (
    <div className={`${styles.wrapper} ${open ? styles.open : ""}`}>
      <div className={styles.heading}>
        {icon && <div className={styles.icon}>{icon}</div>}
        <div
          className={styles.title}
          onClick={handleOpenAccordion}
          tabIndex={1}
        >
          <h4>{title}</h4>
        </div>
        <button className={styles.arrow} onClick={handleOpenAccordion}>
          <IoIosArrowUp />
        </button>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
