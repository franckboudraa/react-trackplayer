import React from 'react';

import { Item } from 'semantic-ui-react';
import SearchResultItem from './SearchResultItem';

const SearchResult = ({ tracks }) => {
  return (
    tracks && (
      <Item.Group divided>
        {tracks.map(track => (
          <SearchResultItem key={track.name + track.artist} {...track} />
        ))}
      </Item.Group>
    )
  );
};

export default SearchResult;
