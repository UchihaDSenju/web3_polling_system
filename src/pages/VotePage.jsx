import React, { useContext, useEffect } from 'react'
import { StateContext } from '../context'
import { CandidateCard } from '../components'

const VotePage = () => {
  const context = useContext(StateContext)
  const checker = context.checkWallet()
  const url = "https://sepolia.etherscan.io/address/" + context.currentAccount
  useEffect(() => {
    context.getCandidates();
  }, [])
  console.log(context.candidates);
  const candidates = context.candidates;
  if(checker){
    return (
      <div>
        {candidates.map((candidate, index) => {
          return(
            <CandidateCard key={index} imageUrl={candidate.logo} candidateName={candidate.name} qualification={candidate.education} partyName={candidate.party} />
          )
        })}
        <div className='mx-auto w-fit bg-yellow-500 p-2 text-amber-800'>
          <h1>After voting check status <a href={url} target='_blank'><span className='text-blue-600'>here</span></a></h1>
        </div>
      </div>
    )
  } 
}

export default VotePage