import { RootState } from "@/app/appStore.ts";

export const filter = ( state: RootState ) => state.filters
export const specialization = ( state: RootState ) => state.filters.specialization
export const skills = ( state: RootState ) => state.filters.skills
export const complexity = ( state: RootState ) => state.filters.complexity
export const rate = ( state: RootState ) => state.filters.rate
export const keywords = ( state: RootState ) => state.filters.title