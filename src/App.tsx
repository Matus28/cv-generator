import styles from "./App.module.scss";
import { Accordion } from "./components/Accordion/Accordion";
import { Education } from "./components/Forms/Education";
import { PersonalInfo } from "./components/Forms/PersonalInfo";
import { Skills } from "./components/Forms/Skills";
import { WorkExperience } from "./components/Forms/WorkExperience";
import { OutputCV } from "./components/OutputCV/OutputCV";

const App = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftPanel}>
        <Accordion title="Personal Information">
          <PersonalInfo />
        </Accordion>
        <Accordion title="Education">
          <Education />
        </Accordion>
        <Accordion title="Work Experience">
          <WorkExperience />
        </Accordion>
        <Accordion title="Skills">
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
