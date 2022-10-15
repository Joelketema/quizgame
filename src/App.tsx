import { useState } from 'react'
import { Box } from "@chakra-ui/react"

import {BrowserRouter as  Router,Routes,Route} from "react-router-dom"

import SideNav from "./components/SideNav"
import TopHeader from './components/TopHeader'
import Typing from './pages/Typing'


function App() {


  return (
    <>
    <Box  bg={"white"}>
    <Router>
        <TopHeader/>
        <SideNav text={"Speed Test"} />
      <Routes>
        <Route path={"typing"} element={<Typing />} />
      </Routes>

      </Router>
    </Box>
    </>
      )
}

export default App
