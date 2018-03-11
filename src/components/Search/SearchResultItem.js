import React from 'react';
import { Button, Item } from 'semantic-ui-react';

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
          <Button floated="right">Action</Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default SearchResultItem;
