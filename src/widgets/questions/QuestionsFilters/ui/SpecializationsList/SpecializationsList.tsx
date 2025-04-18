import { useEffect } from "react";

import { FilterList } from "@/entities/filter";

import { setSpecialization } from "@/entities/filter/slice/filterSlice.ts";
import { useGetSpecializationsQuery } from "@/entities/filter/api/specializationsApi.ts";

import { useAppDispatch, useAppSelector } from "@/app/appStore.ts";

const SpecializationsList = ( { limit, onTotalChange } ) => {
  const dispatch = useAppDispatch()

  const specialization = useAppSelector(( state ) => state.filters.specialization)

  const { data: specializationResponse } = useGetSpecializationsQuery(limit)

  useEffect(() => {
    if (specializationResponse?.total) {
      onTotalChange(specializationResponse.total);
    }
  }, [ specializationResponse ]);

  if (!specializationResponse) return null;

  return (
    <FilterList
      title="Специализация"
      items={specializationResponse.data}
      selectedOption={specialization}
      onClick={( specialization ) => dispatch(setSpecialization(specialization))}
    />
  )
}

export default SpecializationsList