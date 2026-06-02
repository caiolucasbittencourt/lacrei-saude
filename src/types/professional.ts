export type Modality = "Online" | "Presencial" | "Online e presencial";

export type Professional = {
  id: string;
  name: string;
  specialty: string;
  location: string;
  modality: Modality;
  verified: boolean;
  description: string;
  profileTags: string[];
};
