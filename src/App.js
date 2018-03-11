import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Playlist from './components/Playlist';

class App extends Component {
  render() {
    return (
      <Container textAlign="center">
        <h1>TrackPL</h1>
        <Playlist />
      </Container>
    );
  }
}

export default App;
