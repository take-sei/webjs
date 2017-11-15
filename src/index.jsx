/*
 * Entry point of bundle.js(complied by webpack).
 *
 * see groment document as well.
 * http://grommet.github.io/docs/app
 * http://grommet.github.io/docs/header
 * http://grommet.github.io/docs/title
*/

import React from 'react';
import ReactDOM from 'react-dom';

import "grommet/scss/vanilla/index"
import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

ReactDOM.render(
  <App inline={true}>
    <Header>
      <h3>Hello World</h3>
      <Title>
        Hello World
      </Title>
    </Header>
  </App>,
  document.getElementById('content')
)
