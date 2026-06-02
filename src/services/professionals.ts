import { professionals } from "@/data/professionals";
import type { Professional } from "@/types/professional";

export async function getProfessionals(): Promise<Professional[]> {
  return professionals.map((professional) => ({
    ...professional,
    profileTags: [...professional.profileTags],
  }));
}
