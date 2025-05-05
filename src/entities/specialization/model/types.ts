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