import { useAppSelector } from "@/app/appStore.ts";

import { SpecializationsList } from "@/features/specializations";
import { SkillsList } from "@/features/skills";
import { SearchQuestions } from "@/features/question/SearchQuestions";
import { SelectComplexity } from "@/features/question/SelectComplexity";
import { SelectRates } from "@/features/question/SelectRates";
import { ExpandableWrapper, SectionWrapper } from "@/shared";

import { useGetSpecializationsQuery } from "@/entities/specialization/api/specializationsApi.ts";
import { useGetSkillsQuery } from "@/entities/skill/api/skillsApi.ts";
import { specialization } from "@/entities/question/model/selectors.ts";

import styles from "./styles.module.css";

const QuestionsFilters = () => {
  const { data: specData } = useGetSpecializationsQuery(5)
  const specializationList = useAppSelector(specialization)

  const { data: skillData } = useGetSkillsQuery({
    limit: 5,
    specializations: specializationList,
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
      <SelectComplexity/>
      <SelectRates/>
    </SectionWrapper>
  );
};

export default QuestionsFilters;