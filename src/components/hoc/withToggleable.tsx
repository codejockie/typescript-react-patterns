import React, { Component, ComponentType } from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'

import { getHocComponentName } from '../../utils'
import { Toggleable, Props as ToggleableProps, ToggleableComponentProps } from '../Toggleable'

// OwnProps is for any public props that should be available on internal Component.props
// and for WrappedComponent
type OwnProps = object
type InjectedProps = ToggleableComponentProps

export const withToggleable = <OriginalProps extends object>(
  UnwrappedComponent: ComponentType<OriginalProps & InjectedProps>
) => {
  // We are leveraging TS 2.8 conditional mapped types to get proper final prop types
  type Props = Omit<OriginalProps, keyof InjectedProps> & OwnProps

  class WithToggleable extends Component<Props> {
    static readonly displayName = getHocComponentName(
      WithToggleable.displayName,
      UnwrappedComponent
    )

    static readonly WrappedComponent = UnwrappedComponent

    render() {
      const { ...rest } = this.props

      return (
        <Toggleable render={renderProps => <UnwrappedComponent {...rest} {...renderProps} />} />
      )
    }
  }

  return hoistNonReactStatics(WithToggleable, UnwrappedComponent as any) as ComponentType<Props>
}