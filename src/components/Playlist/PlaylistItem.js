import React, { Component } from 'react';

import { Button, Item, Image } from 'semantic-ui-react';

class PlaylistItem extends Component {
  render() {
    const track = this.props;
    return (
      <Item className={track.priority ? 'relative is-priority' : 'relative'}>
        <Item.Image size="tiny" src={track.adder.pictureUrl} />

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
            <a>ajouté par test</a>
            <span style={{ float: 'right' }}>dans 4 mn</span>
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}

export default PlaylistItem;
