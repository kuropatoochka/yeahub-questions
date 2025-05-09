import * as React from "react";

import { Chip, Flex, Icon, Text } from "@/shared";

type Props<T extends string | number> = {
  title: string,
  items: { id: T; title: string; imageSrc?: string }[],
  selectedOption: T | T[],
  onClick: ( id: T ) => void,
  isDisplayOnly?: boolean,
}

const FilterList = <T extends string | number>( {
                                                  title,
                                                  items,
                                                  onClick,
                                                  selectedOption,
                                                  isDisplayOnly
                                                }: Props<T> ) => {

  return (
    <Flex direction="column" gap="8">
      <p>{title}</p>
      <Flex gap="8" wrap="wrap">
        <>
          {items.map(( item ) =>
            <Chip
              key={item.id}
              active={isDisplayOnly || (Array.isArray(selectedOption) ? selectedOption.includes(item.id) : String(selectedOption) === String(item.id))}
              onClick={() => onClick(item.id as T)}
              prefix={item.imageSrc && <Icon size={20} src={item.imageSrc}/>}
            >
              <Text variant='body3-accent' color='black-800'>{item.title}</Text>
            </Chip>
          )}
        </>
      </Flex>
    </Flex>
  )
}

export default FilterList