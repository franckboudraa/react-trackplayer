import React from 'react';
import ReactDOM from 'react-dom';
import PlaylistItem from '../../components/Playlist/PlaylistItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlaylistItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
