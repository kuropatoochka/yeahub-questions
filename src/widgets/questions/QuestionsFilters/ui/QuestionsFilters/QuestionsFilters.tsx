import { useAppSelector } from "@/app/appStore.ts";

import { SpecializationsList } from "@/features/specializations";
import { SkillsList } from "@/features/skills";
import { SearchQuestions } from "@/features/question/search";
import { ComplexitiesList, ExpandableWrapper, RatesList } from "@/features/question/filter";

import { useGetSpecializationsQuery } from "@/entities/specialization/api/specializationsApi.ts";
import { useGetSkillsQuery } from "@/entities/skill/api/skillsApi.ts";

import { SectionWrapper } from "@/shared";

import styles from "./styles.module.css";

const QuestionsFilters = () => {
  const specialization = useAppSelector(( state ) => state.filters.specialization)

  const { data: specData } = useGetSpecializationsQuery(5)

  const { data: skillData } = useGetSkillsQuery({
    limit: 5,
    specializations: specialization,
  })

  return (
    <SectionWrapper className={styles.filters__section}>
      <SearchQuestions/>
      <ExpandableWrapper maxLimit={specData?.total || 5}>
        {( limit ) => <SpecializationsList limit={limit}/>}
      </ExpandableWrapper>
      <ExpandableWrapper maxLimit={skillData?.total || 5}>
        {( limit ) => <SkillsList limit={limit}/>}
      </ExpandableWrapper>
      <ComplexitiesList/>
      <RatesList/>
    </SectionWrapper>
  );
};

export default QuestionsFilters;