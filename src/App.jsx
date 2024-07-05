/* eslint-disable react/no-children-prop */
import './App.css'
import Layout from './onboarding/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
            <Route exact path="/" element={<Layout children={<Login />} />} />
            <Route exact path="/signup" element={<Layout children={<Signup />} />} />
            <Route exact path="/chat" element={<MainChat />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}


export default App
