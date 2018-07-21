import React, { SFC } from 'react'

import { MenuItem } from './MenuItem'
import { Toggleable } from '../Toggleable'

type Props = { title: string }

export const ToggleableMenu: SFC<Props> = ({ title, children }) => (
  <Toggleable
    render={({ show, toggle }) => (
      <MenuItem show={show} toggle={toggle} title={title}>
        {children}
      </MenuItem>
    )}
  />
)