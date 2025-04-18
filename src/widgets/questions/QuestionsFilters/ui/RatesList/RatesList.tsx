import { RATES } from "@/entities/filter/constants/rates.ts";
import { setRate } from "@/entities/filter/slice/filterSlice.ts";
import { FilterList } from "@/entities/filter";
import { useAppDispatch, useAppSelector } from "@/app/appStore.ts";

const RatesList = () => {
  const dispatch = useAppDispatch()

  const rate = useAppSelector(( state ) => state.filters.rate)

  return (
    <FilterList
      title="Рейтинг"
      items={RATES}
      selectedOption={rate}
      onClick={( rate ) => dispatch(setRate(rate))}
    />
  );
};

export default RatesList;