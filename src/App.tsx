import { useState } from 'react'
import { Box,Text } from "@chakra-ui/react"

import {BrowserRouter as  Router,Routes,Route,Navigate} from "react-router-dom"

import SideNav from "./components/SideNav"
import TopHeader from './components/TopHeader'
import Typing from './pages/Typing'
import Home from './pages/Home'
import Guess from './pages/Guess'
import AuthForm from "./pages/AuthForm"
import { LevelProvider } from "./context/LevelContext"
import { Toaster } from "react-hot-toast"
import Maze from './pages/Maze'

function App() {

  
  const menus: {text:string,url:string}[]= [
    { text: "Speed Test",url:"typing" },
    { text: "Guess the Language", url: "guess" }, {
      text: "Maze Game", url:"maze"
    }]
  console.log(menus)
    if (window.innerWidth <= 800) {
      return (
        <Box>
          <Text>Game Only works in full screen</Text>
        </Box>
      )
    }
      return (
        <LevelProvider>
          <Box bg={"white"}>
            <Toaster
              toastOptions={{
                success: {
                  style: {
                    background: 'green',
                    color: "white"
                  },
                },
                error: {
                  style: {
                    background: 'red',
                    color: "white"
                  },
                },
              }}
            />
            <Router>
              <TopHeader />
              <SideNav menus={menus} />
              <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"typing"} element={<Typing />} />
                <Route path={"guess"} element={<Guess />} />
                <Route path={"maze"} element={<Maze />} />
                <Route path={"auth"} element={<AuthForm />} />
                <Route path="*" element={<Navigate to='/' replace />} />

              </Routes>
  
            </Router>
          </Box>
        </LevelProvider>
      )

 
}

export default App
