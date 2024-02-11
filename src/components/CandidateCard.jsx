import React from 'react'
import { useContext } from 'react'
import { StateContext } from '../context'

const CandidateCard = ({imageUrl, candidateName, qualification, partyName}) => {

  const context = useContext(StateContext);
  const voteParty = async () => {
    await context.voteParty(partyName)
  }
  return (
    <button className='bg-[#D9D9D9] mx-auto my-5 flex rounded-lg w-[500px] items-center' onClick={voteParty}>
        <div className='bg-white w-[100px] h-[100px] m-3 rounded-lg'><img className='w-[100px] h-[100px] object-contain' src={imageUrl} /></div>
        <div><b>Name: </b>{candidateName}<br /><b>Qualification: </b>{qualification}<br /><b>Party: </b>{partyName}</div>
    </button>
  )
}

export default CandidateCard