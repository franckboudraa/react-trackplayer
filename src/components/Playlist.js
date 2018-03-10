import React from 'react';
import { Grid, Item, Segment } from 'semantic-ui-react';
import PlaylistItem from './Playlist/PlaylistItem';

const Playlist = ({ tracks }) => {
  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column width={12}>
          <Segment>
            <Item.Group divided className="relative">
              {tracks.map(track => <PlaylistItem key={track.id} {...track} />)}
            </Item.Group>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Playlist;
