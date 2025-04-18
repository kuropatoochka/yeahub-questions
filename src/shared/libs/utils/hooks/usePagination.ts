import { useAppDispatch } from "@/app/appStore.ts";
import { setPage } from "@/entities/filter/slice/filterSlice.ts";

export const usePagination = ( page: number, totalPage: number ) => {
  const dispatch = useAppDispatch()

  const handlePageClick = ( newPage: number ) => {
    if (page !== newPage) dispatch(setPage(newPage))
  }

  const handleNextPageClick = () => {
    if (page < totalPage) dispatch(setPage(page + 1))
  }

  const handlePrevPageClick = () => {
    if (page > 1) dispatch(setPage(page - 1))
  }

  return { handlePageClick, handlePrevPageClick, handleNextPageClick }
}