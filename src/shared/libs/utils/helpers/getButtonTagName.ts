import { VariantType } from "@/shared/model/types.ts";

const tagNameByVariant: Record<VariantType, 'button' | 'a'> = {
  link: 'a',
  'link-gray': 'a',
  button: 'button',
  outline: 'button',
}

export const getTagName = ( variant: keyof typeof tagNameByVariant ): 'button' | 'a' => tagNameByVariant[variant]
