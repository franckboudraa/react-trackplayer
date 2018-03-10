import React from 'react';
import { Header, Image, Segment } from 'semantic-ui-react';
import vinyl from '../../assets/img/vinyl.png';

const PlaylistEmpty = () => {
  return (
    <Segment padded>
      <Image centered src={vinyl} />
      <div style={{ marginTop: '1em', textAlign: 'center' }}>
        <Header as="h1">
          TRACKLIST
          <Header.Subheader>La tracklist est vide.</Header.Subheader>
          <Header.Subheader>
            Ajoutez des titres depuis la recherche.
          </Header.Subheader>
        </Header>
      </div>
    </Segment>
  );
};

export default PlaylistEmpty;
