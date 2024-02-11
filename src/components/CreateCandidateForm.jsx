import React, { useContext } from 'react'
import { StateContext } from '../context'
import ConnectWalletButton from './ConnectWalletButton'


const Input = ({placeholder, name, type, changeHandlerFunction}) => {
  return(
    <input 
      placeholder={placeholder} 
      name={name} 
      type={type} 
      onChange={(e) => changeHandlerFunction(e, name)} 
      className='mx-5 my-5 h-10 rounded-lg px-2'
      />
  )
}

const CreateCandidateForm = () => {

  const context = useContext(StateContext)
  const checker = context.checkWallet()
  context.getOwnerAddress();
  console.log(context.owner)
  if(checker){
    if(context.owner.toLowerCase() == context.currentAccount){
      return(
        <>
      <div className='flex h-[90%]'>
        <div className='flex flex-col w-[500px] h-[60%] justify-evenly bg-[#64CCC5] mx-[auto] mt-20 rounded-2xl py-5'>
          the present name is {context.formData.name}<br />
          the admin is {context.owner}
          <Input placeholder='Candidate Name' name='name' type='text' changeHandlerFunction={context.handleChange}/>
          <Input placeholder='Party Name' name='party' type='text' changeHandlerFunction={context.handleChange}/>
          <Input placeholder='Education' name='education' type='text' changeHandlerFunction={context.handleChange}/>
          <Input placeholder='Party Logo (link)' name='logo' type='text' changeHandlerFunction={context.handleChange}/>
          <button onClick={context.createCandidate} className='customButton bg-red-600 mx-5 h-10'>Create Candidate</button>
        </div>
        <div className='flex flex-col w-[500px] justify-evenly bg-[#64CCC5] mx-[auto] mt-20 rounded-2xl '>
          the present voterToAdd is {context.formData.voteCandidateAddress}<br />
          the admin is {context.owner}
          <Input placeholder='Address of Voting Candidate' name='voteCandidateAddress' type='text' changeHandlerFunction={context.handleChange}/>
          <button onClick={context.addVoter} className='customButton bg-red-600 mx-5 h-10'>Add Candidate</button>
        </div>
      </div>
    </>
      )
    }
    else{
      return(
        <>
          Not an admin so Move to vote page<br></br>
          {context.owner}<br></br>
          {context.currentAccount}
        </>
      )
    }
  }
  else{
    return(
      <ConnectWalletButton />
    )
  }
  // return checker ? (
  //   <>
  //     <div className='flex h-[90%]'>
  //       <div className='flex flex-col w-[500px] h-[60%] justify-evenly bg-[#64CCC5] mx-[auto] mt-20 rounded-2xl py-5'>
  //         the present name is {context.formData.name}<br />
  //         the admin is {context.owner}
  //         <Input placeholder='Candidate Name' name='name' type='text' changeHandlerFunction={context.handleChange}/>
  //         <Input placeholder='Party Name' name='party' type='text' changeHandlerFunction={context.handleChange}/>
  //         <Input placeholder='Education' name='education' type='text' changeHandlerFunction={context.handleChange}/>
  //         <Input placeholder='Party Logo (link)' name='logo' type='text' changeHandlerFunction={context.handleChange}/>
  //         <button onClick={context.createCandidate} className='customButton bg-red-600 mx-5 h-10'>Create Candidate</button>
  //       </div>
  //       <div className='flex flex-col w-[500px] justify-evenly bg-[#64CCC5] mx-[auto] mt-20 rounded-2xl '>
  //         the present voterToAdd is {context.formData.voteCandidateAddress}<br />
  //         the admin is {context.owner}
  //         <Input placeholder='Address of Voting Candidate' name='voteCandidateAddress' type='text' changeHandlerFunction={context.handleChange}/>
  //         <button onClick={context.addVoter} className='customButton bg-red-600 mx-5 h-10'>Add Candidate</button>
  //       </div>
  //     </div>
  //   </>
  // ) : <ConnectWalletButton />
}

export default CreateCandidateForm