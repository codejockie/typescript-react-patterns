import React, { SFC } from 'react'

import { MenuItem } from './MenuItem'
import { Toggleable } from '../Toggleable'

type MenuItemProps = { title: string }
type ToggleableMenuProps = MenuItemProps & { show?: boolean }

export const ToggleableMenu: SFC<ToggleableMenuProps> = ({ title, children, show: showContent }) => (
  <Toggleable show={showContent}>
    {({ show, toggle }) => (
      <MenuItem show={show} toggle={toggle} title={title}>
        {children}
      </MenuItem>
    )}
  </Toggleable>
)