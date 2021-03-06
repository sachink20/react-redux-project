import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import GlobalError from '../components/globalError'
import List from '../components/List'
import Login from '../components/Login'
import RegisterStudent from '../components/Register'
import UserHome from '../components/userHome'


function LinkRoutes() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<RegisterStudent />} />
          <Route path="/register" element={<List />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userHome" element={<UserHome />} />
          <Route path="error" element={<GlobalError />} />
        </Routes>
      </Router>
  )
}

export default LinkRoutes;