import { FiltersState } from "@/entities/filter/model/types.ts";
import { defaultFilters } from "@/entities/filter/constants/defaultFilters.ts";

export const parseSearchParamsToFilters = ( searchParams: URLSearchParams ): Partial<FiltersState> => {
  const filters = { ...defaultFilters };

  searchParams.forEach(( value, key ) => {
    if (!value) return;
    if ([ "skills", "rate", "complexity" ].includes(key)) {
      (filters[key as keyof FiltersState] as string[]) = value.split(",");
    } else {
      (filters[key as keyof FiltersState] as string) = value;
    }
  });

  return filters;
};
