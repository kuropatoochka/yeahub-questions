import React from "react";

import { useGetSpecializationByIdQuery } from "@/entities/filter/api/specializationsApi.ts";
import { Text } from "@/shared";

import { useAppSelector } from "@/app/appStore.ts";

import styles from './styles.module.css';

const QuestionsHeader = React.memo(() => {
  const specialization = useAppSelector(( state ) => state.filters.specialization)

  const { data: specializationResponse } = useGetSpecializationByIdQuery(specialization, {
    skip: !specialization,
  })

  return (
    <Text
      variant='body6'
      color='black-900'
      className={styles.questions__header}
    >
      Вопросы {specializationResponse?.title}
    </Text>
  )
})

export default QuestionsHeader;