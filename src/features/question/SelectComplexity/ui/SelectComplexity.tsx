import { useAppDispatch, useAppSelector } from "@/app/appStore.ts";

import { FilterList } from "@/entities/filter";

import { COMPLEXITIES } from "@/entities/filter/constants/complexities.ts";
import { setComplexity } from "@/entities/filter/slice/filterSlice.ts";
import { complexity } from "@/entities/question/model/selectors.ts";

const SelectComplexity = () => {
  const dispatch = useAppDispatch()
  const complexityList = useAppSelector(complexity)

  return (
    <FilterList
      title="Уровень сложности"
      items={COMPLEXITIES}
      selectedOption={complexityList}
      onClick={( complexity ) => dispatch(setComplexity(complexity))}
    />
  );
};

export default SelectComplexity;