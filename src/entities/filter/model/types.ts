export type IFilters = {
  id: number,
  title: string,
  imageSrc?: string | null,
}

export type ISpecializations = {
  id: number,
  title: string,
  description: string,
  imageSrc: string | null,
}

export type SpecializationsResponse = {
  data: ISpecializations[],
  page: number,
  limit: number,
  total: number,
}

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

export interface FiltersState {
  title: string;
  page: number;
  status: string;
  specialization: number;
  skillFilterMode: string,
  skills: string[];
  complexity: number[];
  rate: number[];
}

export type IComplexities = {
  id: string,
  title: string,
}

export type IRates = {
  id: number,
  title: string,
}