import { useAppDispatch, useAppSelector } from "@/app/appStore.ts";

import { FilterList } from "@/entities/filter";

import { setSpecialization } from "@/entities/filter/slice/filterSlice.ts";
import { useGetSpecializationsQuery } from "@/entities/specialization/api/specializationsApi.ts";
import { specialization } from "@/entities/question/model/selectors.ts";

type Props = {
  limit: number,
}

const SpecializationsList = ( { limit }: Props ) => {
  const dispatch = useAppDispatch()
  const specializationList = useAppSelector(specialization)

  const { data: specializationResponse } = useGetSpecializationsQuery(limit)

  if (!specializationResponse) return null;

  return (
    <FilterList
      title="Специализация"
      items={specializationResponse.data}
      selectedOption={specializationList}
      onClick={( specialization ) => dispatch(setSpecialization(specialization))}
    />
  )
}

export default SpecializationsList