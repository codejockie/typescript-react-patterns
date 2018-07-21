import React, { SFC } from 'react'

import { MenuItem } from './MenuItem'
import { Toggleable } from '../Toggleable'
import { withToggleable } from '../hoc/withToggleable';

type MenuItemProps = { title: string }
type Props = MenuItemProps & { show?: boolean }

// ofType is kind of identity function, returns the same implementation of Toggleable Component
// with proper props={ ... } type definition
const ToggleableWithTitle = Toggleable.ofType<MenuItemProps>()

type ToggleableMenuProps = MenuItemProps & { show?: boolean }

// NOTE:
// We are creating variable alias via destructuring, to avoid shadowing render callback 'show' argument
// -> { show: showContent }

export const ToggleableMenuViaComponentInjection: SFC<ToggleableMenuProps> = ({ title, children, show: showContent }) => (
  <ToggleableWithTitle component={MenuItem} props={{ title }} show={showContent}>
    {children}
  </ToggleableWithTitle>
)

export const ToggleableMenuViaHOC = withToggleable(MenuItem)