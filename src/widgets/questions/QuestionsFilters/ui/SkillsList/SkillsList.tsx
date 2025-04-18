import { useEffect } from "react";

import { FilterList } from "@/entities/filter";

import { setSkills } from "@/entities/filter/slice/filterSlice.ts";
import { useGetSkillsQuery } from "@/entities/filter/api/skillsApi.ts";

import { useAppDispatch, useAppSelector } from "@/app/appStore.ts";

const SkillsList = ( { limit, onTotalChange } ) => {
  const dispatch = useAppDispatch()

  const specialization = useAppSelector(( state ) => state.filters.specialization)
  const skills = useAppSelector(( state ) => state.filters.skills)

  const { data: skillsResponse } = useGetSkillsQuery({
    limit,
    specializations: specialization,
  })

  useEffect(() => {
    if (skillsResponse?.total) {
      onTotalChange(skillsResponse.total)
    }
  }, [ skillsResponse ]);

  if (!skillsResponse) return null;

  return (
    <FilterList
      title="Навыки"
      items={skillsResponse.data}
      selectedOption={skills}
      onClick={( skills ) => dispatch(setSkills(skills))}
    />
  )
}

export default SkillsList