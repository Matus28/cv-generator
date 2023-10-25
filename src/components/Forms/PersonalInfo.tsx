import * as React from "react";
import { Input } from "../Input/Input";
import styles from "./PersonalInfo.module.scss";
import { PersonalInformation } from "../../types/types";

export const PersonalInfo = (): JSX.Element => {
  const [personalInfo, setPersonalInfo] =
    React.useState<PersonalInformation | null>(null);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={onSubmit}>
        <Input
          id="firstName"
          type="text"
          label="First name"
          elementType="input"
          value={personalInfo?.main.firstName ?? ""}
          isRequired={true}
        />
        <Input
          id="lastName"
          type="text"
          label="Last name"
          elementType="input"
          value={personalInfo?.main.lastName ?? ""}
          isRequired={true}
        />
        <Input
          id="photo"
          type="file"
          label="Photo"
          elementType="image"
          value={personalInfo?.main.photo ?? ""}
          isRequired={false}
        />
        <Input
          id="email"
          type="email"
          label="Email address"
          elementType="input"
          value={personalInfo?.main.email ?? ""}
          isRequired={true}
        />
        <Input
          id="phone"
          type="text"
          label="Phone number"
          elementType="input"
          value={personalInfo?.main.phone ?? ""}
          isRequired={false}
        />
        <Input
          id="position"
          type="text"
          label="Position"
          elementType="input"
          value={personalInfo?.main.position ?? ""}
          isRequired={true}
        />
        <Input
          id="country"
          type="text"
          label="Country"
          elementType="input"
          value={personalInfo?.main.country ?? ""}
          isRequired={false}
        />
        <Input
          id="city"
          type="text"
          label="City"
          elementType="input"
          value={personalInfo?.main.city ?? ""}
          isRequired={false}
        />
        <Input
          id="portfolio"
          type="text"
          label="Portfolio page"
          elementType="input"
          value={personalInfo?.main.portfolio ?? ""}
          isRequired={false}
        />
        <h2>Social contacts</h2>
        <hr />
        <Input
          id="linkedin"
          type="text"
          label="Linked-In"
          elementType="input"
          value={personalInfo?.contacts.linkedIn ?? ""}
          isRequired={false}
        />
        <Input
          id="github"
          type="text"
          label="GitHub"
          elementType="input"
          value={personalInfo?.contacts.github ?? ""}
          isRequired={false}
        />
        <h2>Short Description</h2>
        <hr />
        <Input
          id="description"
          type="text"
          label="Short description"
          elementType="input"
          value={personalInfo?.description ?? ""}
          isRequired={false}
        />
      </form>
    </div>
  );
};
