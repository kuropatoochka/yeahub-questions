import { Flex, Text } from "@/shared";

type Props = {
  author: string,
}

const QuestionAuthor = ( { author }: Props ) => {
  return (
    <Flex justify="center" gap="4">
      <Text variant='body2-accent' color='black-800'>Автор:</Text>
      <Text variant='body2-accent' color='purple-700'>{author}</Text>
    </Flex>
  );
};

export default QuestionAuthor;