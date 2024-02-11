import React from 'react'
import { useContext, useEffect } from 'react';
import { StateContext } from '../context';
import { CandidateCard } from '../components';

const Results = () => {
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
            <>
              <CandidateCard key={index} imageUrl={candidate.logo} candidateName={candidate.name} qualification={candidate.education} partyName={candidate.party} />
              {candidate.numberOfVotes.toNumber()}
            </>
          )
        })}
      </div>
    )
}

export default Results