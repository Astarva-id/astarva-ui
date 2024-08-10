import React from 'react'
import styled from 'styled-components'

import {
  space,
  layout,
  background,
  border,
  position,
  shadow,
  typography,
  opacity,
  flex,
} from 'styled-system'

import type { PolymorphBoxProps, BoxProps, PolymorphicRef } from './Box.types'
import { overrideColorConfig } from '@utils/globals'

const StyledBox: React.FC<PolymorphBoxProps<React.ElementType>> = styled.div<
  BoxProps<React.ElementType>
>`
  ${layout}
  ${background}
  ${border}
  ${shadow}
  ${space}
  ${position}
  ${typography}
  ${opacity}
  ${overrideColorConfig}
  ${flex}
  cursor: ${(props) => props.cursor};
  box-sizing: ${(props) => props.boxSizing};
`

const Box = React.forwardRef(
  <C extends React.ElementType = 'div'>(
    props: PolymorphBoxProps<C>,
    ref?: PolymorphicRef<C>,
  ) => <StyledBox ref={ref} {...props} />)

export default Box
