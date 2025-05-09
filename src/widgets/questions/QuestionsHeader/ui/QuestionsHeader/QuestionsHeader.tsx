import { Text } from "@/shared";

import { useAppSelector } from "@/app/appStore.ts";
import { useGetSpecializationByIdQuery } from "@/entities/specialization/api/specializationsApi.ts";
import { specialization } from "@/entities/question/model/selectors.ts";

import styles from "./styles.module.css";

const QuestionsHeader = () => {
  const specializationList = useAppSelector(specialization)
  const { data: specializationResponse } = useGetSpecializationByIdQuery(specializationList)

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