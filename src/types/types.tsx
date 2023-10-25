export interface PersonalInformation {
  main: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    photo?: string;
    position: string;
    country?: string;
    city?: string;
    portfolio?: string;
  };
  contacts: {
    linkedIn?: string;
    github?: string;
  };
  description?: string;
}
