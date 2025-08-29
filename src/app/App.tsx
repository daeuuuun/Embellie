import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import Archesky from '../pages/Archesky/Archesky';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='archesky' element={<Archesky />} />
      </Routes>
    </>
  );
}

export default App;
