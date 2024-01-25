import { createSlice } from "@reduxjs/toolkit";

const initialState =JSON.parse(localStorage.getItem("playerState")) || {
    song:[],
    songs: [
    { id: 1, title: "Halo", artist: "Blackbird Blackbird", track: 1,description:'An agony that surrounds someone who has lost yourself inside', year: 2010, duration: 4},
    { id: 2, title: "Blind", artist: "Blackbird Blackbird", track: 2,description:'An agony that surrounds someone who has lost yourself inside', year: 2011, duration: 3 },
    { id: 3, title: "Twin Flames", artist: "Blackbird Blackbird", track: 3,description:'An agony that surrounds someone who has lost yourself inside', year: 2012, duration: 3},
    { id: 4, title: "Left to Hurt", artist: "Blackbird Blackbird", track: 4, description:'An agony that surrounds someone who has lost yourself inside', year: 2013, duration: 4},
    { id: 5, title: "Starlight", artist: "Blackbird Blackbird", track: 5, description:'An agony that surrounds someone who has lost yourself inside', year: 2014, duration: 2 },
    { id: 6, title: "Modern ", artist: "Blackbird Blackbird", track: 6, description:'An agony that surrounds someone who has lost yourself inside', year: 2015, duration: 4 },

  ],
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    searchSong:(state,action)=>{
        state.songs=state.songs.filter((elm)=>elm.title.includes(action.payload) )
    },
    resetSearchResults: (state, action) => {
      state.songs = initialState.songs;
    },
    decreaseSong: (state, action) => {
      state.songs = state.songs.slice().sort((a, b) => b.track - a.track);
    },
    increaseSong: (state, action) => {
      state.songs = state.songs.slice().sort((a, b) => a.track - b.track);
    },

    addSong: (state, action) => {
      state.songs = [...state.songs, { ...action.payload, id: Date.now() }];
      localStorage.setItem("playerState", JSON.stringify(state));
    },
}
})

export default playerSlice.reducer;
export const {searchSong,resetSearchResults,decreaseSong,increaseSong,addSong}= playerSlice.actions