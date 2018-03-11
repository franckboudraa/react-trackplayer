import React, { Component } from 'react';

import { Grid } from 'semantic-ui-react';

import tracks from '../db/tracks.json';

import PlaylistList from './Playlist/PlaylistList';
import SearchBar from './Search/SearchBar';
import SearchResult from './Search/SearchResult';

class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: null,
      tracks
    };
  }

  dispatchSearchResults = searchResults => {
    this.setState(prevState => {
      return { searchResults };
    });
  };

  dispatchNewTrack = track => {
    const newTrack = {
      id: this.state.tracks.length + 1,
      name: track.name,
      duration: 211,
      priority: false,
      artist: track.artist,
      adder: {
        id: 1,
        name: 'kant',
        pictureUrl:
          'https://res.cloudinary.com/jukeo-net/image/upload/ano-b2_eezggd'
      },
      pictureUrl: track.image[2]['#text'],
      votes: { count: 0, userVoted: false }
    };
    this.setState(prevState => ({
      tracks: [...prevState.tracks, newTrack]
    }));
  };
  render() {
    return (
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={6}>
            <SearchBar
              onSearchEnded={searchResults =>
                this.dispatchSearchResults(searchResults)
              }
            />
            <SearchResult
              tracks={this.state.searchResults}
              addTrackToPlaylist={track => this.dispatchNewTrack(track)}
            />
          </Grid.Column>
          <Grid.Column width={10}>
            <PlaylistList tracks={this.state.tracks} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Playlist;
