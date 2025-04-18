import { useEffect, useState } from "react";

import { Input } from "@/shared";

import { useDebounce } from "@/shared/libs/utils/hooks/useDebounce.ts";

import { useAppDispatch, useAppSelector } from "@/app/appStore.ts";
import { setTitle } from "@/entities/filter/slice/filterSlice.ts";

const SearchQuestions = () => {
  const [ value, setValue ] = useState('')
  const dispatch = useAppDispatch()

  const filteredValue = useAppSelector(( state ) => state.filters.title)

  const debouncedValue = useDebounce<string>(value, 1000);

  useEffect(() => {
    dispatch(setTitle(debouncedValue))
  }, [ debouncedValue ]);

  useEffect(() => {
    setValue(filteredValue)
  }, [ filteredValue ]);

  return (
    <Input
      placeholder='Введите запрос...'
      value={value}
      onChange={( e ) => setValue(e.target.value)}
    />
  )
}

export default SearchQuestions