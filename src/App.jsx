import react from "react"
import Auth from "./components/Auth"
import Profile from "./components/Profile"
import Public from "./components/Public"
import Navbar from "./components/Navbar"
import {Routes, Route} from "react-router-dom"

export default function App(){

  return (
    <>
    <Navbar/>
  
    <Routes>
      <Route path = "/" element = {<Auth />} />
      <Route path = "profile" element = {<Profile/>}/>
      <Route path = "public" element = {<Public/>} />
    </Routes>

    </>
  )
}