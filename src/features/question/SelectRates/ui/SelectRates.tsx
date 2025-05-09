import { useAppDispatch, useAppSelector } from "@/app/appStore.ts";
import { FilterList } from "@/entities/filter";

import { RATES } from "@/entities/filter/constants/rates.ts";
import { setRate } from "@/entities/filter/slice/filterSlice.ts";
import { rate } from "@/entities/question/model/selectors.ts";

const SelectRates = () => {
  const dispatch = useAppDispatch()
  const rateList = useAppSelector(rate)

  return (
    <FilterList
      title="Рейтинг"
      items={RATES}
      selectedOption={rateList}
      onClick={( rate ) => dispatch(setRate(rate))}
    />
  );
};

export default SelectRates;