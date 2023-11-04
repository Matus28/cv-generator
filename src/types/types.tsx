export interface PersonalInfoType {
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
}

export interface EducationType {
  id: string;
  institution: string;
  department: string;
  degreeType: string;
  city: string;
  start: number;
  end: number;
}

export interface UserDataType {
  personalInformation: PersonalInfoType;
  education: EducationType[];
}
