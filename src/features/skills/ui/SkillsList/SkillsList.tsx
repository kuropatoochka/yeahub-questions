import { useAppDispatch, useAppSelector } from "@/app/appStore.ts";

import { FilterList } from "@/entities/filter";

import { setSkills } from "@/entities/filter/slice/filterSlice.ts";
import { useGetSkillsQuery } from "@/entities/skill/api/skillsApi.ts";
import { skills, specialization } from "@/entities/question/model/selectors.ts";

type Props = {
  limit: number,
}

const SkillsList = ( { limit }: Props ) => {
  const dispatch = useAppDispatch()
  const specializationList = useAppSelector(specialization)
  const skillsList = useAppSelector(skills)

  const { data: skillsResponse } = useGetSkillsQuery({
    limit,
    specializations: specializationList,
  })

  if (!skillsResponse) return null;

  return (
    <FilterList
      title="Навыки"
      items={skillsResponse.data}
      selectedOption={skillsList}
      onClick={( skills ) => dispatch(setSkills(skills))}
    />
  )
}

export default SkillsList