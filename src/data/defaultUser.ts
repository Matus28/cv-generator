export const defaultUserData = {
  personalInformation: {
    firstName: "Peter",
    lastName: "Parker",
    photo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    email: "spiderman@gmail.com",
    phone: "+421918165785",
    position: "Programmer",
    country: "Slovakia",
    city: "Bratislava",
    portfolio: "https://www.google.com",
    linkedIn: "https://www.linked-in.com/PeterParker",
    github: "https://www.github.com/PeterParker",
    description: "Some short description about myself...",
  },
  education: [
    {
      id: "1",
      institution: "Slovak University of Technology in Bratislava",
      department: "Automation and Informatics of Machines an Processes",
      degreeType: "Master degree",
      city: "Bratislava",
      startMonth: 0,
      startYear: 2015,
      endMonth: 0,
      endYear: 2017,
    },
    {
      id: "2",
      institution: "Slovak University of Technology in Bratislava",
      department: "Automation and Informatics of Machines an Processes",
      degreeType: "Bachelor degree",
      city: "Bratislava",
      startMonth: 0,
      startYear: 2012,
      endMonth: 0,
      endYear: 2015,
    },
    {
      id: "3",
      institution: "Stredna Priemyselna Skola Technicka",
      department: "Technical lyceum",
      degreeType: "High School Graduation",
      city: "Bratislava",
      startMonth: 0,
      startYear: 2015,
      endMonth: 0,
      endYear: 2009,
    },
  ],
  workExperience: [
    {
      id: "a1",
      employer: "Process Automation Solutions",
      title: "Industrial robot programmer",
      startMonth: 9,
      startYear: 2017,
      endMonth: 8,
      endYear: 2022,
      description: `Prepare offline programs for robots.
      Commissioning an industrial robot on site.
      Online robot programming on site.
      Creating final documentation for customers.`,
    },
  ],
  skill: [
    {
      id: "s1",
      field: "Frontend",
      skill: ["HTML", "CSS", "JavaScript", "Typescript"],
    },
    {
      id: "s2",
      field: "Backend",
      skill: ["Node.js", "Express", "MySQL", "MongoDB"],
    },
  ],
};
