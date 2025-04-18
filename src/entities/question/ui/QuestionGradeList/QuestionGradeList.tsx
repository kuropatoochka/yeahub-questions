import { Flex, GradeChip } from "@/shared";

type Props = {
  rate: number,
  complexity: number,
  className?: string,
}

const QuestionGradeList = ( { rate, complexity, className }: Props ) => {
  return (
    <Flex align="center" gap="40" className={className}>
      <GradeChip label="Рейтинг" value={rate}/>
      <GradeChip label="Сложность" value={complexity}/>
    </Flex>
  );
};

export default QuestionGradeList;