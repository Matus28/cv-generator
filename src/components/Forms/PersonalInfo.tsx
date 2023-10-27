import * as React from "react";
import { Input } from "../Input/Input";
import DefaultImage from "../../assets/upload-icon.svg";
import styles from "./PersonalInfo.module.scss";
// import { PersonalInformation } from "../../types/types";

export const PersonalInfo = (): JSX.Element => {
  // const [personalInfo, setPersonalInfo] =
  //   React.useState<PersonalInformation | null>(null);
  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [photo, setPhoto] = React.useState<File | null>(null);
  const [photoURL, setPhotoURL] = React.useState<string>(DefaultImage);
  const [email, setEmail] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [position, setPosition] = React.useState<string>("");
  const [country, setCountry] = React.useState<string>("");
  const [city, setCity] = React.useState<string>("");
  const [portfolio, setPortfolio] = React.useState<string>("");
  const [linkedIn, setLinkedIn] = React.useState<string>("");
  const [github, setGithub] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");

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
          value={firstName}
          file={null}
          onChange={setFirstName}
          isRequired={true}
        />
        <Input
          id="lastName"
          type="text"
          label="Last name"
          elementType="input"
          value={lastName}
          file={null}
          onChange={setLastName}
          isRequired={true}
        />
        <Input
          id="photo"
          type="file"
          label="Photo"
          elementType="image"
          value={photoURL}
          file={photo}
          onChange={setPhotoURL}
          onChangeFile={setPhoto}
          isRequired={false}
        />
        <Input
          id="email"
          type="email"
          label="Email address"
          elementType="input"
          value={email}
          file={null}
          onChange={setEmail}
          isRequired={true}
        />
        <Input
          id="phone"
          type="text"
          label="Phone number"
          elementType="input"
          value={phone}
          file={null}
          onChange={setPhone}
          isRequired={false}
        />
        <Input
          id="position"
          type="text"
          label="Position"
          elementType="input"
          value={position}
          file={null}
          onChange={setPosition}
          isRequired={true}
        />
        <Input
          id="country"
          type="text"
          label="Country"
          elementType="input"
          value={country}
          file={null}
          onChange={setCountry}
          isRequired={false}
        />
        <Input
          id="city"
          type="text"
          label="City"
          elementType="input"
          value={city}
          file={null}
          onChange={setCity}
          isRequired={false}
        />
        <Input
          id="portfolio"
          type="text"
          label="Portfolio page"
          elementType="input"
          value={portfolio}
          file={null}
          onChange={setPortfolio}
          isRequired={false}
        />
        <h2>Social contacts</h2>
        <hr />
        <Input
          id="linkedin"
          type="text"
          label="Linked-In"
          elementType="input"
          value={linkedIn}
          file={null}
          onChange={setLinkedIn}
          isRequired={false}
        />
        <Input
          id="github"
          type="text"
          label="GitHub"
          elementType="input"
          value={github}
          file={null}
          onChange={setGithub}
          isRequired={false}
        />
        <h2>Short Description</h2>
        <hr />
        <Input
          id="description"
          type="text"
          label="Short description"
          elementType="input"
          value={description}
          file={null}
          onChange={setDescription}
          isRequired={false}
        />
      </form>
    </div>
  );
};
