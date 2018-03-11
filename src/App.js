import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';
import Playlist from './components/Playlist';

class App extends Component {
  render() {
    return (
      <Container textAlign="center">
        <h1>Tracktr</h1>
        <Playlist />
        <Menu secondary size="mini" widths={1}>
          <Menu.Item name="footer">&copy; 2018 Franck Boudraa</Menu.Item>
        </Menu>
      </Container>
    );
  }
}

export default App;
