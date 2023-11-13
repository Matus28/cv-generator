export type PersonalInfoType = {
  firstName: string;
  lastName: string;
  photo: string;
  email: string;
  phone: string;
  position: string;
  country: string;
  city: string;
  portfolio: string;
  linkedIn: string;
  github: string;
  description: string;
};

export type EducationType = {
  id: string;
  institution: string;
  department: string;
  degreeType: string;
  city: string;
  startMonth: number;
  startYear: number;
  endMonth: number;
  endYear: number;
};

export type WorkExperienceType = {
  id: string;
  employer: string;
  title: string;
  startMonth: number;
  startYear: number;
  endMonth: number;
  endYear: number;
  description: string;
};

export type SkillType = {
  id: string;
  field: string;
  skill: string[];
};

export type UserDataType = {
  personalInformation: PersonalInfoType;
  education: EducationType[];
  workExperience: WorkExperienceType[];
  skill: SkillType[];
};
