import { FiltersState } from "../model/types.ts";

export const defaultFilters: FiltersState = {
  title: "",
  page: 1,
  status: "all",
  specialization: 11,
  skillFilterMode: "ANY",
  skills: [],
  complexity: [],
  rate: [],
};