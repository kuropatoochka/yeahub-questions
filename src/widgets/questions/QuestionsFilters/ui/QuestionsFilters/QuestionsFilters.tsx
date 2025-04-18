import { useState } from "react";

import { ComplexitiesList, RatesList, SkillsList, SpecializationsList } from "@/widgets/questions/QuestionsFilters";
import { ExpandableWrapper } from "@/features/filter";
import { SearchQuestions } from "@/features/questions";
import { SectionWrapper } from "@/shared";

import styles from "./styles.module.css";

const QuestionsFilters = () => {
  const [ specsLimit, setSpecsLimit ] = useState(5)
  const [ skillsLimit, setSkillsLimit ] = useState(5)

  return (
    <SectionWrapper className={styles.filters__section}>
      <SearchQuestions/>

      <ExpandableWrapper maxLimit={specsLimit}>
        {( limit: number ) => (
          <SpecializationsList limit={limit} onTotalChange={( total ) => setSpecsLimit(total)}/>
        )}
      </ExpandableWrapper>

      <ExpandableWrapper maxLimit={skillsLimit}>
        {( limit: number ) => (
          <SkillsList limit={limit} onTotalChange={( total ) => setSkillsLimit(total)}/>
        )}
      </ExpandableWrapper>

      <ComplexitiesList/>
      <RatesList/>

    </SectionWrapper>
  );
};

export default QuestionsFilters;