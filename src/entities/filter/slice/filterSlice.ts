import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { defaultFilters } from "@/entities/filter/constants/defaultFilters.ts";
import { FiltersState } from "@/entities/filter/model/types.ts";
import { toggleItem } from "@/shared/libs/utils/helpers/toggleItemInArray.ts";


const initialState: FiltersState = { ...defaultFilters }

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    setPage: ( state, action: PayloadAction<number> ) => {
      state.page = action.payload;
    },

    setTitle: ( state, action: PayloadAction<string> ) => {
      state.title = action.payload;
      state.page = 1;
    },

    setSpecialization: ( state, action: PayloadAction<number> ) => {
      return {
        ...initialState,
        specialization: action.payload,
        page: 1,
      };
    },

    setRate: ( state, action: PayloadAction<number> ) => {
      state.rate = toggleItem(state.rate, action.payload)
      state.page = 1;
    },

    setComplexity: ( state, action: PayloadAction<number> ) => {
      state.complexity = toggleItem(state.complexity, action.payload)
      state.page = 1;
    },

    setSkills: ( state, action: PayloadAction<string> ) => {
      state.skills = toggleItem(state.skills, action.payload)
      state.page = 1;
    },

    setFilters: ( state, action: PayloadAction<Partial<FiltersState>> ) => {
      return { ...initialState, ...action.payload };
    },

    resetFilters: () => {
      return initialState;
    },
  }
})

export const {
  setPage,
  setTitle,
  setSpecialization,
  setRate,
  setComplexity,
  setSkills,
  setFilters,
  resetFilters
} = filterSlice.actions

export default filterSlice.reducer