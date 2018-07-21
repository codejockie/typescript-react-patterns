import React, { Component, MouseEvent, ComponentType, ReactNode } from 'react'

import { isFunction } from '../utils'

const initialState = { show: false }
const defaultProps: DefaultProps = { ...initialState, props: {} }

type State = Readonly<typeof initialState>
export type Props<P extends object = object> = Partial<
  {
    children: RenderCallback | ReactNode
    render: RenderCallback
    component: ComponentType<ToggleableComponentProps<P>>
  } & DefaultProps<P>
>

type DefaultProps<P extends object = object> = { props: P } & Pick<State, 'show'>

type RenderCallback = (args: ToggleableComponentProps) => JSX.Element

export type ToggleableComponentProps<P extends object = object> = {
  show: State['show']
  toggle: Toggleable['toggle'] 
} & P

export class Toggleable<T extends object = object> extends Component<Props<T>, State> {
  static readonly defaultProps: Props = defaultProps
  readonly state: State = { show: this.props.show! }

  static ofType<T extends object>() {
    return Toggleable as Constructor<Toggleable<T>>
  }

  componentWillReceiveProps(nextProps: Props<T>) {
    const currentProps = this.props

    if (nextProps.show !== currentProps.show) {
      this.setState({ show: Boolean(nextProps.show) })
    }
  }

  render() {
    const {
      component: InjectedComponent,
      children,
      render,
      props
    } = this.props
    const renderProps = { show: this.state.show, toggle: this.toggle }

    // When component prop API is used, children is ReactNode not a function
    if (InjectedComponent) {
      return (
        <InjectedComponent {...props} {...renderProps}>
          {children}
        </InjectedComponent>
      )
    }

    if (render) {
      return render(renderProps)
    }

    // children as a function comes last
    return isFunction(children) ? children!(renderProps) : null
  }

  private toggle = (event: MouseEvent<HTMLElement>) => this.setState(updateShowState)
}

const updateShowState = (prevState: State) => ({ show: !prevState.show })