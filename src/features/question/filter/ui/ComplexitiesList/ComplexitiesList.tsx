import { COMPLEXITIES } from "@/entities/filter/constants/complexities.ts";
import { setComplexity } from "@/entities/filter/slice/filterSlice.ts";
import { FilterList } from "@/entities/filter";
import { useAppDispatch, useAppSelector } from "@/app/appStore.ts";

const ComplexitiesList = () => {
  const dispatch = useAppDispatch()

  const complexity = useAppSelector(( state ) => state.filters.complexity)

  return (
    <FilterList
      title="Уровень сложности"
      items={COMPLEXITIES}
      selectedOption={complexity}
      onClick={( complexity ) => dispatch(setComplexity(complexity))}
    />
  );
};

export default ComplexitiesList;