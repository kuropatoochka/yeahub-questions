import { FiltersState } from "@/entities/filter/model/types.ts";

export const cleanQueryParams = ( filters: FiltersState ) => {
  return Object.entries(filters).reduce(( params, [ key, value ] ) => {
    if (value.length !== 0 || key === 'title') {
      params[key] = value.toString()
    }
    return params
  }, {} as Record<string, string>)
}