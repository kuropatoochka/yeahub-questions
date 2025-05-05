import { useAppSelector } from "@/app/appStore.ts";

import { useGetSpecializationByIdQuery } from "@/entities/specialization/api/specializationsApi.ts";

import { Text } from "@/shared";

import styles from "./styles.module.css";

const QuestionsHeader = () => {
  const specialization = useAppSelector(( state ) => state.filters.specialization)

  const { data: specializationResponse } = useGetSpecializationByIdQuery(specialization, {
    skip: !specialization,
  })

  return (
    <Text
      variant="body6"
      color="black-900"
      className={styles.questions__header}
    >
      Вопросы {specializationResponse?.title}
    </Text>
  )
}

export default QuestionsHeader;