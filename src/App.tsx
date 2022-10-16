import { useState } from 'react'
import { Box,Text } from "@chakra-ui/react"

import {BrowserRouter as  Router,Routes,Route} from "react-router-dom"

import SideNav from "./components/SideNav"
import TopHeader from './components/TopHeader'
import Typing from './pages/Typing'
import Home from './pages/Home'
import AuthForm from "./pages/AuthForm"
import { useEffect } from "react"

function App() {
    
    if (window.innerWidth <= 800) {
      console.log("HEY")
      return (
        <Box>
          <Text>Game Only works in full screen</Text>
        </Box>
      )
    }
    else {
      return (
        <>
          <Box bg={"white"}>
            <Router>
              <TopHeader />
              <SideNav text={"Speed Test"} />
              <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"typing"} element={<Typing />} />
                <Route path={"auth"} element={<AuthForm />} />
              </Routes>
  
            </Router>
          </Box>
        </>
      )
    }
  
 
}

export default App
