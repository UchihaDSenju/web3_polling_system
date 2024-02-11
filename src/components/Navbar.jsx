import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className='flex justify-between bg-[#053B50] py-5'>
            <div>
                LogoHere
            </div>
            <div className='flex'>
                <Link className='customButton btnLightBlue mx-2' to={'/'}>Home</Link>
                <Link className='customButton btnLightBlue mx-2' to={'/createCandidate'}>Create Candidate</Link>
                <Link className='customButton btnLightBlue mx-2' to={'/votePage'}>Vote</Link>
                <Link className='customButton btnLightBlue mx-2' to={'/results'}>Results</Link>
            </div>
        </nav>
    </> 
  )
}

export default Navbar