import React, { PureComponent } from 'react';

import { Button, Item, Image } from 'semantic-ui-react';

class PlaylistItem extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: this.props.index
    };
  }
  componentDidMount = () => {
    this.state.index === 1 && this.props.setPlayingTrack(this.props);
  };

  componentWillReceiveProps = nextProps => {
    if (this.state.currentIndex !== nextProps.index) {
      this.setState(
        {
          currentIndex: nextProps.index
        },
        () => {
          this.state.currentIndex === 1 &&
            this.props.setPlayingTrack(this.props);
        }
      );
    }
  };
  render() {
    const track = this.props;
    return (
      <Item className={track.priority ? 'relative is-priority' : 'relative'}>
        <Item.Image
          size="tiny"
          className="circle"
          src={track.adder.pictureUrl}
        />

        <Item.Content>
          <Button
            icon="heart"
            content={track.votes.count}
            compact
            circular
            floated="right"
            className={track.votes.userVoted ? 'ttl-heart-bg' : 'ttl-bg'}
            size="big"
            secondary
            onClick={() => this.props.setLike()}
          />
          <Button
            compact
            circular
            icon="arrow up"
            floated="right"
            secondary
            className={track.priority ? 'ttl-success-bg' : 'ttl-bg'}
            size="big"
            onClick={() => this.props.setPrioritary()}
          />
          <Item.Image
            size="tiny"
            as={Image}
            rounded
            floated="left"
            src={track.pictureUrl}
          />
          <Item.Header as="a">{track.name}</Item.Header>
          <Item.Meta>{track.artist}</Item.Meta>
          <Item.Extra style={{ float: 'left' }}>
            <a>ajouté par kiki</a>
            <span style={{ float: 'right' }}>
              dans {Math.round(track.remaining / 60)} mn
            </span>
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}

export default PlaylistItem;
