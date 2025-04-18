import { Button, Flex, Text } from "@/shared";
import { useAppDispatch, useAppSelector } from "@/app/appStore.ts";
import { resetFilters } from "@/entities/filter/slice/filterSlice.ts";

const EmptyList = () => {
  const value = useAppSelector(( state ) => state.filters.title)
  const dispatch = useAppDispatch()

  return (
    <Flex direction="column" gap="20">
      <Text variant="body5-accent" color="black-900">К сожалению, по запросу {value} ничего не найдено. Попробуйте
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