import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Playlist from './components/Playlist';

class App extends Component {
  render() {
    return (
      <Container>
        <h1>Track Playlist</h1>
        <Playlist />
      </Container>
    );
  }
}

export default App;
