import { Button, Flex, Icon, Text } from "@/shared";

import { IconArrowPagination, IconDots } from "@/shared/assets";

import styles from "./styles.module.css";

type PaginationProps = {
  totalPages: number,
  page: number,
  className: string,
  onChangePage: ( page: number ) => void,
  onPrevPageClick: () => void,
  onNextPageClick: () => void,
}

const Pagination = ( {
                       totalPages,
                       page,
                       className,
                       onChangePage,
                       onPrevPageClick,
                       onNextPageClick
                     }: PaginationProps ) => {
  const isPrevDisabled = page <= 1;
  const isNextDisabled = page >= totalPages;

  const endPage = Math.min(totalPages, Math.max(1, page - 3) + 5)
  const startPage = Math.max(1, endPage - 5)

  const arrayOfPages = Array.from({ length: endPage - startPage + 1 }, ( _, i ) => startPage + i)

  return (
    <Flex align="center" gap="10" className={className}>
      <Button
        variant="button"
        onClick={onPrevPageClick}
        disabled={isPrevDisabled}
        suffix={<Icon src={IconArrowPagination as string} size={28}/>}
      />
      {startPage > 1 && (
        <>
          <Button
            variant="button"
            className={page === 1 && styles.page__active}
            onClick={() => onChangePage(1)}
          >
            <Text variant='body2-accent' color={1 === page ? 'white-900' : 'black-700'}>1</Text>
          </Button>
          <Icon src={IconDots as string} size={14}/>
        </>
      )}
      {arrayOfPages.map(( value ) =>
        value ? (
          <Button
            key={value}
            variant="button"
            onClick={() => onChangePage(value)}
            className={page === value ? styles.page__active : ''}
          >
            <Text variant='body2-accent' color={value === page ? 'white-900' : 'black-700'}>{value}</Text>
          </Button>
        ) : null
      )}
      {endPage < totalPages && (
        <>
          <Icon src={IconDots as string} size={14}/>
          <Button
            variant="button"
            onClick={() => onChangePage(totalPages)}
            className={page === totalPages ? styles.page__active : ''}
          >
            <Text variant='body2-accent' color={totalPages === page ? 'white-900' : 'black-700'}>{totalPages}</Text>
          </Button>
        </>
      )}
      <Button
        variant="button"
        onClick={onNextPageClick}
        disabled={isNextDisabled}
        suffix={<Icon src={IconArrowPagination} size={28} className={styles.arrowRight}/>}
      />
    </Flex>
  );
};

export default Pagination;