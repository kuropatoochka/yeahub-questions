import { ISkills } from "@/entities/skill/model/types.ts";

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

export interface QuestionsResponse {
  data: IQuestion[];
  total: number;
  page: number;
  limit: number;
}