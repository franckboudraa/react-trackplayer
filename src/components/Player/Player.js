import React, { Component } from 'react';
import axios from 'axios';

const YOUTUBE_ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      track: null,
      youtubeID: ''
    };
  }

  componentDidUpdate = () => {
    const term = this.props.track.name + ' ' + this.props.track.artist;
    this.YTSearch(term, videos => {
      this.setState({
        youtubeID: videos['0'].id.videoId
      });
    });
  };
  YTSearch = (term, callback) => {
    var params = {
      part: 'snippet',
      key: process.env.REACT_APP_YOUTUBE_KEY,
      q: term,
      type: 'video'
    };

    axios
      .get(YOUTUBE_ROOT_URL, { params: params })
      .then(function(response) {
        if (callback) {
          callback(response.data.items);
        }
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  render() {
    return (
      <div style={{ height: '100px !important' }}>
        <iframe
          title="player"
          style={{ width: '100%' }}
          frameBorder={0}
          src={`https://www.youtube.com/embed/${
            this.state.youtubeID
          }?hd=1&showinfo=0`}
        />
      </div>
    );
  }
}

export default Player;
