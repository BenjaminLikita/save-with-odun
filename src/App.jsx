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



function App() {
  const [isLoading, setLoading] = useState(true)

  const {token} = useSelector(state => state.user)
  const isAuth = Boolean(token)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  })

  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={isAuth ? <UserHome /> : <Navigate to={"/auth/login"} />} />
        <Route path='/user/deposit' element={isAuth ? <Deposit /> : <Navigate to={"/auth/login"} />} />
        <Route path='/user/my-target-boxes' element={isAuth ? <TargetBoxes /> : <Navigate to={"/auth/login"} />} />
        <Route path='/user/investments' element={isAuth ? <MyInvestments /> : <Navigate to={"/auth/login"} />} />
        <Route path='/user/history' element={isAuth ? <History /> : <Navigate to={"/auth/login"} />} />
        <Route path='/user/settings' element={isAuth ? <Settings /> : <Navigate to={"/auth/login"} />} />
        <Route path='/auth/login' element={isAuth ? <Navigate to={"/user"} /> : <Login />} />
        <Route path='/auth/signUp' element={isAuth ? <Navigate to={"/user"} /> : <SignUp />} /> 
        <Route path='/*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
