import React from 'react';
import ReactDOM from 'react-dom';
import PlaylistList from '../../components/Playlist/PlaylistList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlaylistList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
