import { ISpecializations } from "@/entities/specialization/model/types.ts";

export type ISkills = {
  id: number,
  title: string,
  imageSrc: string | null,
  specializations: ISpecializations[],
}

export type SkillsResponse = {
  data: ISkills[],
  page: number,
  limit: number,
  total: number,
}

export type SkillsParams = {
  limit: number,
  specializations: number[],
}