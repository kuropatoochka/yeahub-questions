import { Flex, Text } from "@/shared";

type Props = {
  hashtags: string[],
}

const QuestionHashtagList = ( { hashtags }: Props ) => {
  return (
    <Flex wrap="wrap" gap="10">
      <>
        {hashtags?.map(( hashtag, index ) =>
          <Text key={index} variant='body3' color='purple-700'>#{hashtag}</Text>
        )}
      </>
    </Flex>
  );
};

export default QuestionHashtagList;