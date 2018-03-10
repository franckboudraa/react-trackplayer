import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import PlaylistItem from './PlaylistItem';

class PlaylistList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: this.props.tracks
    };
  }

  setPrioritary = id => {
    const newArray = this.state.tracks.map(track => {
      if (track.id === id) {
        track.priority = !track.priority;
      }
      return track;
    });
    this.setState((prevState, props) => {
      return { tracks: newArray };
    });
  };

  setLike = id => {
    const newArray = this.state.tracks.map(track => {
      if (track.id === id) {
        if (track.votes.userVoted) {
          track.votes.count -= 1;
          track.votes.userVoted = false;
        } else {
          track.votes.count += 1;
          track.votes.userVoted = true;
        }
      }
      return track;
    });
    this.setState((prevState, props) => {
      return { tracks: newArray };
    });
  };

  render() {
    const { tracks } = this.state;
    return (
      <Item.Group divided>
        {tracks.map(track => (
          <PlaylistItem
            key={track.id}
            {...track}
            setLike={() => this.setLike(track.id)}
            setPrioritary={() => this.setPrioritary(track.id)}
          />
        ))}
      </Item.Group>
    );
  }
}

export default PlaylistList;
