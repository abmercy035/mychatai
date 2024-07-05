/* eslint-disable react/no-children-prop */
import { useState } from 'react'
import './App.css'
import Layout from './onboarding/Layout'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Login from './onboarding/Login'
import Signup from './onboarding/Signup'
import MainChat from './chatpage/MainChat'
import { UserProvider } from './UserContext'

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/login" element={<Layout children={<Login />} />} />
            <Route exact path="/signup" element={<Layout children={<Signup />} />} />
            <Route exact path="/chat" element={<MainChat />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}


export default App
