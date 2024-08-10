import React from 'react'
import styled from 'styled-components'

import {
  space,
  color,
  layout,
  flexbox,
  background,
  border,
  position,
  shadow,
  typography,
  flex,
} from 'styled-system'
import { overrideColorConfig } from '@utils/globals'
import { PolymorphicRef } from '../Box/Box.types'
import { PolymorphFlexProps, FlexProps, FlexComponent } from './Flex.types'
import { getGapUtils } from './utils'

const StyledFlex: React.FC<PolymorphFlexProps<React.ElementType>> = styled.div<
  FlexProps<React.ElementType>
>`
  display: flex;
  cursor: ${(props) => props.cursor};
  box-sizing: ${(props) => props.boxSizing};
  ${flexbox}
  ${color}
  ${layout}
  ${background}
  ${border}
  ${shadow}
  ${space}
  ${position}
  ${getGapUtils}
  ${typography}
  ${overrideColorConfig}
  ${flex}
`

const Flex: FlexComponent = React.forwardRef(
  <C extends React.ElementType = 'div'>(
    { ...props }: PolymorphFlexProps<C>,
    ref?: PolymorphicRef<C>,
  ) => <StyledFlex ref={ref} {...props} />,
)
export default Flex
