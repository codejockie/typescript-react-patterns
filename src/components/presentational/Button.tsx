import React, { MouseEvent, SFC } from 'react'

import { withDefaultProps } from '../../utils'

const defaultProps = {
  color: 'red'
}

type DefaultProps = typeof defaultProps
type Props = {
  onClick(event: MouseEvent<HTMLElement>): void
  color?: string
} & DefaultProps

const Button: SFC<Props> = ({ onClick: handleClick, color, children }) => (
  <button onClick={handleClick} style={{ color }}>
    {children}
  </button>
)

const ButtonWithDefaultProps = withDefaultProps(defaultProps, Button)
export default ButtonWithDefaultProps