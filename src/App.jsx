import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Error from './Pages/Error'
import UserHome from './Pages/UserHome'
import Footer from './components/Footer'
import TargetBoxes from './Pages/TargetBoxes'
import MyInvestments from './Pages/MyInvestments'
import History from './Pages/History'
import Settings from './Pages/Settings'
import Deposit from './Pages/Deposit'
import ProtectedRoute from './components/ProtectedRoute'
import AuthRoute from './components/AuthRoute'



function App() {
  const [isLoading, setLoading] = useState(true)

  const token = useSelector(state => state.user)
  console.log(token);
  const isAuth = Boolean(token)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  })

  return (

    <Router>
      <Routes>

        {/* Public Routes */}
        <Route path='/' element={<Home />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path='/user' element={<UserHome />} />
          <Route path='/user/deposit' element={<Deposit />} />
          <Route path='/user/my-target-boxes' element={<TargetBoxes />} />
          <Route path='/user/investments' element={<MyInvestments />} />
          <Route path='/user/history' element={<History />} />
          <Route path='/user/settings' element={<Settings />} />
        </Route>
        
        {/* Authentication Routes */}
        <Route element={<AuthRoute />}>
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/signUp' element={<SignUp />} /> 
        </Route>

        {/* Error Route */}
        <Route path='/*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
