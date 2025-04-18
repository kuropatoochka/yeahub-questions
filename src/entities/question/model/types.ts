import { ISkills } from "@/entities/filter/model/types.ts";

type AuthorType = {
  id: string,
  username: string,
}

export interface IQuestion {
  id: number;
  title: string;
  complexity: number;
  rate: number;
  shortAnswer: string;
  keywords: string[];
  longAnswer: string;
  createdBy: AuthorType;
  questionSkills: ISkills[];
  description: string;
  imageSrc: string | null;
}