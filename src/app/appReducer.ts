import { combineReducers } from "redux";
import baseApi from "@/shared/api/baseApi.ts";
import filterSlice from "@/entities/filter/slice/filterSlice.ts";

export const rootReducer = combineReducers({
  filters: filterSlice,
  [baseApi.reducerPath]: baseApi.reducer,
});
