import {combineReducers} from 'redux';

const songsReducer = () => {
  return[
    {title : 'title 1', duration : '4:09'},
    {title : 'title 2', duration : '2:18'},
    {title : 'title 3', duration : '3:42'},
    {title : 'title 4', duration : '3:30'}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED'){
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs : songsReducer,
  selectedSong : selectedSongReducer
});
