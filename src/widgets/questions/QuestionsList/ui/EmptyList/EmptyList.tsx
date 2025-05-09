import { Button, Flex, Text } from "@/shared";

import { useAppDispatch, useAppSelector } from "@/app/appStore.ts";
import { resetFilters } from "@/entities/filter/slice/filterSlice.ts";
import { keywords } from "@/entities/question/model/selectors.ts";

const EmptyList = () => {
  const dispatch = useAppDispatch()
  const title = useAppSelector(keywords)

  return (
    <Flex direction="column" gap="20">
      <Text variant="body5-accent" color="black-900">К сожалению, по запросу {title} ничего не найдено. Попробуйте
        изменить запрос или воспользуйтесь нашими категориями</Text>
      <Button
        variant="outline"
        onClick={() => dispatch(resetFilters())}
      >
        Сбросить фильтры
      </Button>
    </Flex>
  );
};

export default EmptyList;