import { Pagination } from "@/shared";
import { usePagination } from "@/shared/libs/utils/hooks/usePagination.ts";

import styles from "./styles.module.css";

type Props = {
  page: number;
  totalPages: number;
}

const QuestionsPagination = ( { page, totalPages }: Props ) => {
  const {
    handlePageClick,
    handlePrevPageClick,
    handleNextPageClick
  } = usePagination(page, totalPages)

  return (
    <Pagination
      totalPages={totalPages}
      page={page}
      className={styles.pagination__wrapper}
      onChangePage={handlePageClick}
      onPrevPageClick={handlePrevPageClick}
      onNextPageClick={handleNextPageClick}
    />
  );
};

export default QuestionsPagination;