import React from 'react';
import { Button, Icon, Item } from 'semantic-ui-react';

const SearchResultItem = props => {
  return (
    <Item>
      <Item.Image
        className="squared"
        size="tiny"
        src={props.image[2]['#text']}
      />

      <Item.Content verticalAlign="middle">
        <Item.Header>{props.name}</Item.Header>
        <Item.Description>{props.artist}</Item.Description>
        <Item.Extra>
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
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default SearchResultItem;
