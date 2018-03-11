import React from 'react';

import { Item, Segment } from 'semantic-ui-react';
import SearchResultItem from './SearchResultItem';

const SearchResult = props => {
  const { tracks } = props;

  return (
    tracks && (
      <Segment padded>
        <Item.Group divided>
          {tracks.map(track => (
            <SearchResultItem
              key={track.name + track.artist}
              {...track}
              addTrackToPlaylist={e => props.addTrackToPlaylist(e)}
            />
          ))}
        </Item.Group>
      </Segment>
    )
  );
};

export default SearchResult;
