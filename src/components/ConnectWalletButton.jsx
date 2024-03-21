import React, { useContext } from 'react'
import { StateContext } from '../context'

const ConnectWalletButton = () => {
    const context = useContext(StateContext)
  return (
    <div className='h-[80vh] flex justify-center items-center '>
        <button onClick={context.connectWallet} className='text-center bg-yellow-500 rounded-sm p-5 text-amber-900' >
            Connect Wallet Now
        </button>
    </div>
  )
}

export default ConnectWalletButton