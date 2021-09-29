import { combineReducers } from "redux";

const songsReducer = () => {
    return[
        {title: 'Teri Mitti', duration: '3:00'},
        {title: 'Ranjha', duration: '3:30'},
        {title: 'Pehla Pyaar', duration: '3:45'},
        {title: 'Channa Mereya', duration: '3:40'}
    ];
};


const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
