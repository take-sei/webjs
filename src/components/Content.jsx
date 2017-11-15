/*
 * Test Component
*/

import React from 'react';

// http://grommet.github.io/docs/button
import Button from 'grommet/components/Button';

export class App extends React.Component {
  render () {
    return <Button label="Hello, Grommet." onClick={true} />
  }
}
