import React, { Component } from 'react'

const initialState = { showContents: false }
type State = Readonly<typeof initialState>

import { ToggleableMenu } from './presentational/ToggleableMenu'
import { ToggleableMenuViaComponentInjection, ToggleableMenuViaHOC } from './presentational/ToggleableMenuViaComponentInjection';

export class Menu extends Component {
  readonly state: State = initialState
  
  toggleShowContents = () => {}

  render() {
    const { showContents } = this.state

    return (
      <>
        <button onClick={this.toggleShowContents}>Toggle showContent</button>
        <ToggleableMenu title="First Menu" show={showContents}>Some content</ToggleableMenu>
        <ToggleableMenuViaComponentInjection title="Second Menu" show={showContents}>Another content</ToggleableMenuViaComponentInjection>
        <ToggleableMenuViaHOC title="Third Menu" show={showContents}>More content</ToggleableMenuViaHOC>
      </>
    )
  }
}