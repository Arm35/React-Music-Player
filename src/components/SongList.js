import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SongList.css";
import SongRow from "./SongRow";
import { searchSong, resetSearchResults, decreaseSong,increaseSong } from "../features/player/playerSlice";

const SongList = () => {
  const { songs } = useSelector((st) => st.player);
  const dispatch = useDispatch();

  const [playingSongId, setPlayingSongId] = useState(null);
  const [selectedSongId, setSelectedSongId] = useState(null);

  const togglePlayStop = (id) => {
    if (playingSongId === id) {
      setPlayingSongId(null);
    } else {
      setPlayingSongId(id);
    }
  };


  const showDetails = (id) => {
    setSelectedSongId(selectedSongId === id ? null : id);
  };


  const searchbytitle = (searchValue) => {
    if (searchValue === "") {
      dispatch(resetSearchResults());
    } else {
      dispatch(searchSong(searchValue));
    }
  };

  const selectTrackOrder = (value) => {
    if (value === 'increase') {
      dispatch(increaseSong());
    } else if (value === 'decrease') {
      dispatch(decreaseSong());
    } else {
      dispatch(resetSearchResults());
    }
  };

  return (
    <div>
      <div className="maindiv">
        <div className="subdiv">
          <div className="btn">
            <button>Play All</button>
            <i className="fa-solid fa-play"></i>
          </div >
          <div className="btn">
            <button>Add All</button>
            <i class="fa-solid fa-plus"></i>
          </div >
        </div>

        <div className="subdiv">
          <div className="select-container">
            <select onChange={(e) => selectTrackOrder(e.target.value)}>
              <option value="Track Number">Track Number</option>
              <option value="increase">Increase</option>
              <option value="decrease">Decrease</option>
            </select>
            <i class="fa-solid fa-down-long"></i>
            <i class="fa-solid fa-up-long"></i>
          </div>
          <div class="search-container">
            <i class="fa-solid fa-search"></i>
            <input type="text" placeholder="Filter" onChange={(e) => (searchbytitle(e.target.value))} />
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Song Name</th>
            <th>Artist Name</th>
            <th>Track</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {songs.map((elm) => (
            <React.Fragment key={elm.id}>
              <tr>
                <td
                  className="play_icon"
                  onClick={() => togglePlayStop(elm.id)}
                >
                  {playingSongId === elm.id ? (
                    <i className="fa-solid fa-pause"></i>
                  ) : (
                    <i className="fa-solid fa-play"></i>
                  )}
                </td>
                <td onClick={() => showDetails(elm.id)} className="title">
                  {elm.title}
                </td>
                <td>{elm.artist}</td>
                <td>{elm.track}</td>
                <td className="icon-container">
                  <i className="fa-solid fa-heart"></i>
                  <i className="fa-solid fa-check"></i>
                  <i className="fa-solid fa-share"></i>
                  <i className="fa-solid fa-caret-down"></i>
                </td>
              </tr>
              {selectedSongId === elm.id && (
                <tr>
                  <td colSpan="5">
                    <SongRow
                      description={elm.description}
                      year={elm.year}
                      duration={elm.duration}
                    />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SongList;