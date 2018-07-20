import { Children, ReactNode, ComponentType } from 'react'

export const isEmptyChildren = (children: ReactNode) => Children.count(children) === 0
export const isFunction = <T extends Function>(value: any): value is T =>
  typeof value === 'function'
export const getComponentName = (component: ComponentType<any>) =>
  component.displayName || (component as any).name
export const getHocComponentName = (hocName: string, component: ComponentType<any>) =>
  `${hocName}(${getComponentName(component)})`

export const withDefaultProps = <P extends object, DP extends Partial<P> = Partial<P>>(
  defaultProps: DP,
  Cmp: ComponentType<P>
) => {
  // We are extracting props that need to be required
  type RequiredProps = Omit<P, keyof DP>

  // We are re-creating our props definition by creating an intersection type
  // between all original props mapped to be optional and required
  type Props = Partial<DP> & Required<RequiredProps>

  // Here we set our defaultProps
  Cmp.defaultProps = defaultProps

  // We override return type definition by turning type checker off
  // for original props and setting the correct return type
  return (Cmp as ComponentType<any>) as ComponentType<Props>
}