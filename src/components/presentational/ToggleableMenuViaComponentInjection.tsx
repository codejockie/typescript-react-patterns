import React, { SFC } from 'react'

import { MenuItem } from './MenuItem'
import { Toggleable } from '../Toggleable'

type Props = { title: string }
type MenuItemProps = { title: string }
type ToggleableMenuProps = MenuItemProps & { show?: boolean }

export const ToggleableMenuViaComponentInjection: SFC<ToggleableMenuProps> = ({ title, children }) => (
  <Toggleable
    component={MenuItem} props={{ title }}>
    {children}
  </Toggleable>
)