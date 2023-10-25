import styles from "./App.module.scss";
import { Accordion } from "./components/Accordion/Accordion";
import { Education } from "./components/Forms/Education";
import { PersonalInfo } from "./components/Forms/PersonalInfo";
import { Skills } from "./components/Forms/Skills";
import { WorkExperience } from "./components/Forms/WorkExperience";
import { OutputCV } from "./components/OutputCV/OutputCV";
import { BsFillPersonFill, BsFillMouse2Fill } from "react-icons/bs";
import { MdOutlineWork } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";

const App = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftPanel}>
        <Accordion title="Personal Information" icon={<BsFillPersonFill />}>
          <PersonalInfo />
        </Accordion>
        <Accordion title="Education" icon={<IoIosSchool />}>
          <Education />
        </Accordion>
        <Accordion title="Work Experience" icon={<MdOutlineWork />}>
          <WorkExperience />
        </Accordion>
        <Accordion title="Skills" icon={<BsFillMouse2Fill />}>
          <Skills />
        </Accordion>
      </div>
      <div className={styles.rightPanel}>
        <OutputCV />
      </div>
    </div>
  );
};

export default App;
