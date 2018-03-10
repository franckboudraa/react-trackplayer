import React, { Component } from 'react';
import _ from 'lodash';
import { Item } from 'semantic-ui-react';
import FlipMove from 'react-flip-move';

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
    const tracks = _.orderBy(
      this.state.tracks,
      ['priority', 'votes.count'],
      ['desc', 'desc']
    );
    return (
      <Item.Group divided>
        <FlipMove duration={350} typeName={null} easing="ease-out">
          {tracks.map(track => (
            <PlaylistItem
              key={track.id}
              {...track}
              setLike={() => this.setLike(track.id)}
              setPrioritary={() => this.setPrioritary(track.id)}
            />
          ))}
        </FlipMove>
      </Item.Group>
    );
  }
}

export default PlaylistList;
