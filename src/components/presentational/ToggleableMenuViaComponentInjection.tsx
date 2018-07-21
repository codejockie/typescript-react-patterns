import React, { SFC } from 'react'

import { MenuItem } from './MenuItem'
import { Toggleable } from '../Toggleable'

type MenuItemProps = { title: string }
// ofType is kind of identity function, returns the same implementation of Toggleable Component
// with proper props={ ... } type definition
const ToggleableWithTitle = Toggleable.ofType<MenuItemProps>()

type ToggleableMenuProps = MenuItemProps & { show?: boolean }

export const ToggleableMenuViaComponentInjection: SFC<ToggleableMenuProps> = ({ title, children }) => (
  <ToggleableWithTitle component={MenuItem} props={{ title }}>
    {children}
  </ToggleableWithTitle>
)