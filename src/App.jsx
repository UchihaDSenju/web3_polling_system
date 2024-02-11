import React from 'react'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import {Navbar} from './components'
import { CreateCandidate, Home, Results, VotePage } from './pages'
import {ToastContainer, Zoom} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='bg-[#176B87] min-h-[100vh]'>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createCandidate' element={<CreateCandidate />} />
          <Route path='/votePage' element={<VotePage />} />
          <Route path='/results' element={<Results />} />
        </Routes>
        <ToastContainer theme='colored' autoClose={1000} transition={Zoom} hideProgressBar='true' />
      </HashRouter>
    </div>
  )
}

export default App