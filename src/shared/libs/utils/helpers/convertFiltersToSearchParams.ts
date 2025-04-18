import { FiltersState } from "@/entities/filter/model/types.ts";

export const convertFiltersToSearchParams = ( filters: FiltersState ): URLSearchParams => {
  return Object.entries(filters).reduce(( acc, [ key, value ] ) => {
    if (value && value.length !== 0 && key !== "skillFilterMode") {
      acc.set(key, String(value));
    }
    if (key === "title" && value.trim() !== "") acc.set(key, String(value));
    return acc;
  }, new URLSearchParams());
};
