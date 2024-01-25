import React from 'react';
import './App.css';
import MusicUploadForm from './components/MusicUploadForm';
import SongList from './components/SongList';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Routers from './components/Router';

function App() {
 
 
 
 
 
  return (
      <BrowserRouter>
        <Routers/>
      </BrowserRouter>
  );
}

export default App;
