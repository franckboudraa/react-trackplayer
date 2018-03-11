import React from 'react';
import { Button, Icon, Item } from 'semantic-ui-react';

const SearchResultItem = props => {
  return (
    <Item>
      <Item.Image
        className="squared"
        size="tiny"
        src={props.image[2]['#text']}
        style={{ marginBottom: '1em' }}
      />

      <Item.Content>
        <Button
          icon
          floated="right"
          circular
          compact
          className="ttl-bg"
          secondary
          onClick={() => props.addTrackToPlaylist(props)}
        >
          <Icon name="add" />
        </Button>
        <Item.Header>{props.name}</Item.Header>
        <Item.Meta>{props.artist}</Item.Meta>
      </Item.Content>
    </Item>
  );
};

export default SearchResultItem;
