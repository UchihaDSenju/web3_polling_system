import React, { useContext, useEffect } from 'react'
import { StateContext } from '../context'
import { CandidateCard } from '../components'

const VotePage = () => {
  const context = useContext(StateContext)
  useEffect(() => {
    context.getCandidates();
  }, [])
  console.log(context.candidates);
  const candidates = context.candidates;
  return (
    <div>
      {candidates.map((candidate, index) => {
        return(
          <CandidateCard key={index} imageUrl={candidate.logo} candidateName={candidate.name} qualification={candidate.education} partyName={candidate.party} />
        )
      })}
    </div>
  )
}

export default VotePage