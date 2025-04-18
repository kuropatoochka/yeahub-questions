import { ReactNode, useState } from "react";

import { Button, Flex } from "@/shared";

type Props = {
  children: ( limit: number | undefined ) => ReactNode,
  maxLimit: number,
  defaultLimit?: number,
}

const ExpandableWrapper = ( { children, maxLimit, defaultLimit = 5 }: Props ) => {
  const [ isOpen, setIsOpen ] = useState(false)

  const limit = isOpen ? maxLimit : defaultLimit

  const toggle = () => setIsOpen(( prev ) => !prev)

  return (
    <Flex direction="column" gap="8">
      {children(limit)}
      <Button variant='link' onClick={toggle}>{isOpen ? "Скрыть" : "Посмотреть все"}</Button>
    </Flex>
  );
};

export default ExpandableWrapper;