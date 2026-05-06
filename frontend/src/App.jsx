import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { useEffect } from 'react'
import axios from 'axios'
import { setUsersData } from './redux/userSlice'
import { useDispatch} from "react-redux";

export const ServerUrl = "http://localhost:8000"
const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getUser = async () => {
      try {
        let result = await axios.get(ServerUrl + "/api/user/current-user",
          { withCredentials: true })
        dispatch(setUsersData(result.data))
      } catch (error) {
        console.log(error)
        dispatch(setUsersData(null))
      }
    }
    getUser();
  },[dispatch])
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Auth' element={<Auth />} />
    </Routes>
  )
}

export default App