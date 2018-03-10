import React from 'react';

import { Button, Item, Image } from 'semantic-ui-react';

const PlaylistItem = props => {
  const track = props;
  return (
    <Item className={track.priority ? 'relative is-priority' : 'relative'}>
      <Item.Image size="tiny" src={track.adder.pictureUrl} />

      <Item.Content>
        <Button
          icon="heart"
          content="0"
          compact
          circular
          floated="right"
          secondary
          className="ttl-bg"
          size="big"
        />
        <Button
          compact
          circular
          icon="arrow up"
          floated="right"
          secondary
          className="ttl-bg"
          size="big"
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
};

export default PlaylistItem;
