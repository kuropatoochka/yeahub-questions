import { ReactNode, useEffect, useState } from "react";

import { Button, Flex } from "@/shared";

import { useToggle } from "@/shared/libs/utils/hooks/useToggle.ts";

type Props = {
  children: ( limit: number ) => ReactNode,
  maxLimit: number,
}

const ExpandableWrapper = ( { children, maxLimit }: Props ) => {
  const [ limit, setLimit ] = useState(5)
  const [ isOpen, toggle ] = useToggle()

  useEffect(() => {
    setLimit(( prev ) => {
      if (prev === 5) {
        return maxLimit
      } else {
        return 5
      }
    })
  }, [ isOpen ])

  return (
    <Flex direction="column" gap="8">
      {children(limit as number)}
      <Button variant="link" onClick={toggle}>{isOpen ? "Скрыть" : "Посмотреть все"}</Button>
    </Flex>
  );
};

export default ExpandableWrapper;