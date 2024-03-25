import React, { useContext } from 'react'
import {Link, NavLink} from 'react-router-dom'
import { StateContext } from '../context';

const Navbar = () => {

  let isOwner = false;
  const context = useContext(StateContext)
  // if(context.owner.toLowerCase() == context.currentAccount) isOwner = true;
  return (
    <>
        <nav className='flex justify-between bg-[#053B50] py-5'>
            <div>
                <h1 className='hidden sm:block text-[25px] text-yellow-200'><span className='font-protestStrike text-[30px] text-yellow-600'>WEB3 </span>Polling System</h1>
            </div>
            <div className='flex'>
                <Link className='customButton btnLightBlue mx-2' to={'/'}>Home</Link>
                <Link className='customButton btnLightBlue mx-2' to={'/createCandidate'}>Add as Voter</Link>
                <Link className='customButton btnLightBlue mx-2' to={'/votePage'}>Vote</Link>
                <Link className='customButton btnLightBlue mx-2' to={'/results'}>Results</Link>
            </div>
        </nav>
    </> 
  )
}

export default Navbar