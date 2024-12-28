export interface GeneralInformation {
  name: string;
  position: string;
  sideShortInfo: string;
  mainShortInfo: string;
  mainDetailsInfo: string;
  email: string;
  placeOfResidence: string;
  resumeLink: { url: string };
}

export interface SocialMediaLink {
  platformName: string;
  url: string;
}

export interface Skill {
  name: string;
}

export interface Experience {
  companyName: string;
  position: string;
  from: string;
  till: string;
  isCurrent: boolean;
  description: string;
  skills: Array<Skill>;
}

export interface Project {
  name: string;
  description: string;
  date: string | null;
  skills: Array<Skill>;
  thumbnail: {
    url: string;
    alternativeText: string;
  };
}
