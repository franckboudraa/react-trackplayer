import React, { PureComponent } from 'react';
import _ from 'lodash';
import { Item, Segment } from 'semantic-ui-react';
import FlipMove from 'react-flip-move';

import PlaylistItem from './PlaylistItem';
import PlaylistEmpty from './PlaylistEmpty';

class PlaylistList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tracks: this.props.tracks
    };
  }

  componentDidMount = () => {
    this.props.setPlayingTrack(this.state.tracks[0]);
  };

  componentWillReceiveProps(nextProps) {
    //if (this.state.tracks !== nextProps.tracks) {
    this.setState({
      tracks: nextProps.tracks
    });
    //}
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
    let duration = -200;
    let i = 0;

    return tracks.length > 0 ? (
      <Segment>
        <Item.Group divided className="relative">
          <FlipMove duration={350} typeName={null} easing="ease-out">
            {tracks.map(track => {
              i++;
              return (
                <PlaylistItem
                  key={track.id}
                  {...track}
                  index={i}
                  remaining={(duration += track.duration)}
                  setLike={() => this.setLike(track.id)}
                  setPrioritary={() => this.setPrioritary(track.id)}
                  setPlayingTrack={trackToPlay =>
                    this.props.setPlayingTrack(trackToPlay)
                  }
                />
              );
            })}
          </FlipMove>
        </Item.Group>
      </Segment>
    ) : (
      <PlaylistEmpty />
    );
  }
}

export default PlaylistList;
