import * as React from "react";

export type VariantType =
  | 'link'
  | 'button'
  | 'outline'
  | 'link-gray';

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  variant: VariantType,
  size?: 'medium' | 'large',
  suffix?: JSX.Element,
  className?: string
}

export type TextVariant =
  | 'body2-accent'
  | 'body2-strong'
  | 'body3'
  | 'body3-accent'
  | 'body5-accent'
  | 'body6'

export type Palette =
  | 'purple-900'
  | 'purple-800'
  | 'purple-700'
  | 'purple-600'
  | 'purple-500'
  | 'purple-400'
  | 'purple-300'
  | 'purple-200'
  | 'purple-100'
  | 'purple-50'
  | 'red-900'
  | 'red-800'
  | 'red-700'
  | 'red-600'
  | 'red-500'
  | 'red-400'
  | 'red-300'
  | 'red-200'
  | 'red-100'
  | 'red-25'
  | 'yellow-900'
  | 'yellow-800'
  | 'yellow-700'
  | 'yellow-600'
  | 'yellow-500'
  | 'yellow-400'
  | 'yellow-300'
  | 'yellow-200'
  | 'green-900'
  | 'green-800'
  | 'green-750'
  | 'green-700'
  | 'green-600'
  | 'green-500'
  | 'green-400'
  | 'green-300'
  | 'green-200'
  | 'green-100'
  | 'green-007'
  | 'black-1000'
  | 'black-900'
  | 'black-850'
  | 'black-800'
  | 'black-700'
  | 'black-600'
  | 'black-500'
  | 'black-400'
  | 'black-300'
  | 'black-200'
  | 'black-150'
  | 'black-100'
  | 'black-50'
  | 'black-30'
  | 'black-25'
  | 'white-900';