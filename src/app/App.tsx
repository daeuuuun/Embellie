import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import Archesky from '../pages/Archesky/Archesky';
import SoulTravel from '../pages/SoulTravel/SoulTravel';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='archesky' element={<Archesky />} />
        <Route path='soultravel' element={<SoulTravel />} />
      </Routes>
    </>
  );
}

export default App;
