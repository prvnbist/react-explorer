/** @jsx jsx */
import { jsx } from '@emotion/core'
import tw from 'twin.macro'

export const Button = {
   Icon: ({ children, border, ...props }) => (
      <button
         css={[
            border?.t && tw`border-t`,
            border?.r && tw`border-r`,
            border?.b && tw`border-b`,
            border?.l && tw`border-l`,
            tw`h-10 w-10 flex items-center justify-center border-gray-300`,
            tw`hover:(bg-gray-200)`,
         ]}
         {...props}>
         {children}
      </button>
   ),
}
