import React, { useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import User from './pages/User';
import { UserContext } from './contexts';

function App() {
  const [userCtx, setUserCtx] = useState({
    username: '',
    access_token: '',
  });
  return (
    <UserContext.Provider value={{ userCtx, setUserCtx }}>
      <Routes>
        <Route element={<Layout />}>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
