import React, { SFC } from 'react'

import { ToggleableComponentProps } from '../Toggleable'

type MenuItemProps = { title: string }

export const MenuItem: SFC<MenuItemProps & ToggleableComponentProps> = ({
  title,
  toggle,
  show,
  children
}) => (
  <>
    <div onClick={toggle}>
      <h1>{title}</h1>
    </div>
    {show ? children : null}
  </>
)