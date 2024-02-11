import React, { createContext, useState } from 'react'
import {ethers} from 'ethers'
import { contractABI, contractAddress } from '../constants';
import { toast } from 'react-toastify';

export const StateContext = createContext();

const StateContextProvider = (props) => {
  const [formData, setFormData] = useState({name: "", party: "", education: "", logo: "", voteCandidateAddress: ""});
  const [currentAccount, setCurrentAccount] = useState("");
  const [owner, setOwner] = useState("");
  const [candidates, setCandidates] = useState([]);
  const wallet = window.ethereum;

  const handleChange = (e, name) => {
    setFormData((prevState) => ({...prevState, [name]: e.target.value}))
  }

  const getOwnerAddress = async () => {
    const contract = await getContract();
    const ownerAddress = await contract.getOwner();
    setOwner(ownerAddress);
  }

  const addVoter = async () => {
    if(formData.voteCandidateAddress == ""){
      // console.error("Fill all Fields Properly");
      toast.warn("Fill All Fields Properly");
    }
    else{
      const contract = await getContract();
      const address = formData.voteCandidateAddress;
      const blockHash = await contract.addVoter(address);
      // console.log("adding voter to the voter List")
      const load = toast.loading('Adding the candidate to the voter list')
      await blockHash.wait();
      toast.update(load, {render: "Added Voter To Voter List", type: 'success', isLoading: false})
    }
  }

  const createCandidate = async () => {
    if(formData.name == "" || formData.party == "" || formData.education == "" || formData.logo == ""){
      console.error("Fill all fields Properly");
      toast.warn("Fill All Fields Properly");
    }
    else{
      const contract = await getContract();
      const blockHash = await contract.addCandidate(formData.name, formData.party, formData.education, formData.logo);
      console.log("Writing to block Please Wait...")
      const load = toast.loading('Creating Party to vote... Please Wait')
      await blockHash.wait();
      console.log("New block created... check your network", blockHash.hash)
      toast.update(load, {render: "Candidate added check the vote page", type: 'success', isLoading: false})
    }
  }

  const getCandidates = async () => {
    const contract = await getContract();
    const candidatesArray = await contract.getCandidates();
    setCandidates(candidatesArray);
  }

  const voteParty = async (partyName) => {
    const contract = await getContract();
    const blockHash = await contract.vote(partyName);
    console.log("Uploading your Vote Please Wait...");
    await blockHash.wait();
    console.log("Voted Successfully, You can check your progress in etherscan Website")
  }

  const checkWallet = () => {
    if(wallet){
      console.log("Wallet Detected");
      if(currentAccount == ""){
        return false
      }
      else{
        return true;
      }
    }
    else{
      console.error("Install Metamask")
    }
  }

  const connectWallet = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts"
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  }

  const getContract = async () => {
    const provider = new ethers.providers.Web3Provider(wallet);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer)

    return contract;
  }



  return (
    <StateContext.Provider value={{handleChange, formData, checkWallet, connectWallet, getOwnerAddress, owner, currentAccount, createCandidate, getCandidates, candidates, voteParty, addVoter}}>
        {props.children}
    </StateContext.Provider>
  )
}

export default StateContextProvider