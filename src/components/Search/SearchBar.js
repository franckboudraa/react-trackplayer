import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Input } from 'semantic-ui-react';

const BASE_API_URL =
  'http://ws.audioscrobbler.com/2.0/?method=track.search&format=json';
const API_URL = BASE_API_URL + '&api_key=' + process.env.REACT_APP_API_KEY;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      tracklist: null,
      loading: false
    };
  }
  onInputChange(term) {
    this.setState({ term });
    this.videoSearch(term);
    this.setState({ loading: true });
  }

  videoSearch = _.debounce(term => {
    this.searchOnSpotify(term);
  }, 500);

  searchOnSpotify = async term => {
    if (term) {
      const res = await axios.get(`${API_URL}&track=${term}`);
      const { track } = await res.data.results.trackmatches;

      let tracklist = [];
      for (let i = 0; i < 5; i++) {
        tracklist.push(await track[i]);
        if (i === 4) {
          this.setState({ loading: false });
          this.props.onSearchEnded(tracklist);
        }
      }
    } else {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Input
        loading={this.state.loading ? true : false}
        fluid
        type="text"
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)}
        icon={{ name: 'search', circular: true, link: true }}
        placeholder="Rechercher une chanson"
      />
    );
  }
}

export default SearchBar;
