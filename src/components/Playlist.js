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
      searchResults: null
    };
  }

  dispatchSearchResults = searchResults => {
    console.log(searchResults);
    this.setState(prevState => {
      return { searchResults };
    });
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
            <SearchResult tracks={this.state.searchResults} />
          </Grid.Column>
          <Grid.Column width={10}>
            <PlaylistList tracks={tracks} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Playlist;
