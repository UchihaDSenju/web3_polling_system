import React, { useContext } from 'react'
import { StateContext } from '../context'

const ConnectWalletButton = () => {
    const context = useContext(StateContext)
  return (
    <div className=''>
        <button onClick={context.connectWallet} className='bg-red-600 rounded-xl text-center px-7 text-gray-300' >
            Connect Wallet Now
        </button>
    </div>
  )
}

export default ConnectWalletButton