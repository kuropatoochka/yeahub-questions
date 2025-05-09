import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/appStore.ts";

import { Input } from "@/shared";

import { setTitle } from "@/entities/filter/slice/filterSlice.ts";
import { keywords } from "@/entities/question/model/selectors.ts";
import { useDebounceCallback } from "@/shared/libs/utils/hooks/useDebounceCallback.ts";

const SearchQuestions = () => {
  const [ value, setValue ] = useState('')
  const dispatch = useAppDispatch()
  const title = useAppSelector(keywords)

  const debouncedDispatch = useDebounceCallback(( newValue: string ) => {
    dispatch(setTitle(newValue))
  }, 1000)

  const handleInputChange = ( newValue: string ) => {
    setValue(newValue)
    debouncedDispatch(newValue)
  }

  useEffect(() => {
    setValue(title)
  }, [])

  return (
    <Input
      placeholder='Введите запрос...'
      value={value}
      onChange={handleInputChange}
    />
  )
}

export default SearchQuestions