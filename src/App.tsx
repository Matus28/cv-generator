import styles from "./App.module.scss";
import { Accordion } from "./components/Accordion/Accordion";
import { PersonalInfo } from "./components/Forms/PersonalInfo";
import { OutputCV } from "./components/OutputCV/OutputCV";

const App = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftPanel}>
        <Accordion title="Personal Information">
          <PersonalInfo />
        </Accordion>
      </div>
      <div className={styles.rightPanel}>
        <OutputCV />
      </div>
    </div>
  );
};

export default App;
