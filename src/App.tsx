import * as React from "react";
import { Accordion } from "./components/Accordion/Accordion";
import { PersonalInfo } from "./components/Forms/PersonalInfo";
import { Skill } from "./components/Forms/Skill";
import { WorkExperience } from "./components/Forms/WorkExperience";
import { OutputCV } from "./components/OutputCV/OutputCV";
import { BsFillPersonFill, BsFillMouse2Fill } from "react-icons/bs";
import { MdOutlineWork } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
import { defaultUserData } from "./data/defaultUser";
import { UserDataType } from "./types/types";
import { Education } from "./components/Forms/Education";
import styles from "./App.module.scss";

const App = (): JSX.Element => {
  const [userData, setUserData] = React.useState<UserDataType>(defaultUserData);

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftPanel}>
        <Accordion title="Personal Information" icon={<BsFillPersonFill />}>
          <PersonalInfo data={userData.personalInformation} />
        </Accordion>
        <Accordion title="Education" icon={<IoIosSchool />}>
          <Education data={userData.education} />
        </Accordion>
        <Accordion title="Work Experience" icon={<MdOutlineWork />}>
          <WorkExperience data={userData.workExperience} />
        </Accordion>
        <Accordion title="Skills" icon={<BsFillMouse2Fill />}>
          <Skill data={userData.skill} />
        </Accordion>
      </div>
      <div className={styles.rightPanel}>
        <OutputCV />
      </div>
    </div>
  );
};

export default App;
