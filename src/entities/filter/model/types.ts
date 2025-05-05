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