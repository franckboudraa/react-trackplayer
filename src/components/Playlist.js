import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import tracks from '../db/tracks.json';

import PlaylistList from './Playlist/PlaylistList';

const Playlist = () => {
  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column width={12}>
          <Segment>
            <PlaylistList tracks={tracks} />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Playlist;
