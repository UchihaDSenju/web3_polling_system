import React, { useContext } from 'react'
import { StateContext } from '../context'
import ConnectWalletButton from './ConnectWalletButton'
import { useNavigate } from 'react-router-dom';


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
  const navigate = useNavigate();
  context.getOwnerAddress();
  console.log(context.owner)
  if(checker){
    if(context.owner.toLowerCase() == context.currentAccount){
      return(
        <>
      <div className='flex flex-col h-[90%] sm:flex-row'>
        <div className='flex flex-col h-[60%] justify-evenly bg-[#64CCC5] mx-[auto] mt-20 rounded-2xl py-5 sm:[500px]'>
          <div className='mx-1'>
          The present name is {context.formData.name}<br />
          The admin is {context.owner}
          </div>
          <Input placeholder='Candidate Name' name='name' type='text' changeHandlerFunction={context.handleChange}/>
          <Input placeholder='Party Name' name='party' type='text' changeHandlerFunction={context.handleChange}/>
          <Input placeholder='Education' name='education' type='text' changeHandlerFunction={context.handleChange}/>
          <Input placeholder='Party Logo (link)' name='logo' type='text' changeHandlerFunction={context.handleChange}/>
          <button onClick={context.createCandidate} className='customButton bg-red-600 mx-5 h-10'>Create Candidate</button>
        </div>
        <div className='flex flex-col justify-evenly bg-[#64CCC5] mx-[auto] mt-20 rounded-2xl sm:w-[500px]'>
          <div className='mx-1'>
          The present voterToAdd is {context.formData.voteCandidateAddress}
          <br />
          The admin is {context.owner}
          </div><br />
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
          <div className='flex h-[100vh] justify-center items-center'>
            {/* Not an admin so Move to vote page<br></br>
            {context.owner}<br></br>
            {context.currentAccount} */}
              <div className='mx-auto w-fit text-center bg-yellow-500 rounded-sm p-5 text-amber-900'>
                <h1 className=''>Oops.. Seems like you are <span className='text-red-600'>not an admin</span></h1>
                <h1>Kindly move to the vote page</h1>
                <button className='bg-red-950 text-white p-1 rounded-sm mt-3 hover:bg-red-700' onClick={() => {
                  navigate('/votePage')
                }}>Move to vote page</button>
              </div>
          </div>
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