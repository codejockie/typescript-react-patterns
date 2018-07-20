import React, { Component } from 'react'

import { ToggleableMenu } from './presentational/ToggleableMenu'

export class Menu extends Component {
  render() {
    return (
      <>
        <ToggleableMenu title="First Menu">Some content</ToggleableMenu>
        <ToggleableMenu title="Second Menu">Another content</ToggleableMenu>
        <ToggleableMenu title="Third Menu">More content</ToggleableMenu>
      </>
    )
  }
}