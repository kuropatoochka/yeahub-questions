import { useAppDispatch, useAppSelector } from "@/app/appStore.ts";

import { FilterList } from "@/entities/filter";

import { setSkills } from "@/entities/filter/slice/filterSlice.ts";
import { useGetSkillsQuery } from "@/entities/skill/api/skillsApi.ts";

type Props = {
  limit: number,
}

const SkillsList = ( { limit }: Props ) => {
  const dispatch = useAppDispatch()

  const specialization = useAppSelector(( state ) => state.filters.specialization)
  const skills = useAppSelector(( state ) => state.filters.skills)

  const { data: skillsResponse } = useGetSkillsQuery({
    limit,
    specializations: specialization,
  })

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