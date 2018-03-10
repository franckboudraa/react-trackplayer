import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Playlist from './components/Playlist';
import tracks from './db/tracks.json';

class App extends Component {
  render() {
    return (
      <Container textAlign="center">
        <h1>Track Playlist</h1>
        <Playlist tracks={tracks} />
      </Container>
    );
  }
}

export default App;
