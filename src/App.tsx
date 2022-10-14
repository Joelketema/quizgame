import { useState } from 'react'
import { Box } from "@chakra-ui/react"

import {BrowserRouter as  Router,Routes,Route} from "react-router-dom"

import SideNav from "./components/SideNav"
import Typing from './pages/Typing'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Box  bg={"white"} display={'flex'} justifyContent={"center"} alignItems={"center"}>
    <Router>
      <SideNav text={"Speed Test"} />
      <Routes>
        <Route path={"typing"} element={<Typing />} />
      </Routes>

      </Router>
    </Box>
  )
}

export default App
