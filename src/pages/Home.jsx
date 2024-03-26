import React, { useContext, useState } from 'react'
import { StateContext } from '../context'
import InstructionCard from '../components/InstructionCard';
import { datas } from '../constants';
import { IoLogoAndroid, IoLogoWindows } from "react-icons/io";

const Home = () => {
  const context = useContext(StateContext);
  context.getOwnerAddress();
  const [toggle, setToggle] = useState(1);
  const updateToggle = (id) => {
    setToggle(id);
  }
  return (
    <>
      <div className='mx-2'>
        <div>
          <h1 className='text-center text-3xl'>GETTING STARTED</h1>
          <div class="w-[25%] mx-auto my-4">
            <ul class="flex justify-center -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              <li class="me-2">
                <a onClick={() => updateToggle(1)} href="#" class={toggle === 1 ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}>
                  <div className='flex justify-center items-center'><IoLogoWindows className='text-2xl mr-2' /><h1>Windows</h1></div>
                </a>

              </li>
              <li class="me-2">
                <a onClick={() => updateToggle(2)} href="#" class={toggle === 2 ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"} aria-current="page">
                  <div className='flex justify-center items-center'><IoLogoAndroid className='text-3xl mr-2' /><h1>Android</h1></div>
                </a>

              </li>
            </ul>
          </div>
          <div className={toggle === 1 ? "block my-3 w-[60%] mx-auto text-center" : "hidden"}>
            {datas.generalInstructions.map((data, ind) => {
              return (
                <InstructionCard key={ind} image={data.image} insNumber={ind + 1} title={data.title} desc={data.desc} />
              )
            })}
          </div>
        </div>
        <div className={toggle === 2 ? "block my-3 w-[60%] mx-auto text-center" : "hidden"}>
            {datas.generalInstructionsAndroid.map((data, ind) => {
              return (
                <InstructionCard key={ind} image={data.image} insNumber={ind + 1} title={data.title} desc={data.desc} />
              )
            })}
        </div>
      </div>
    </>
  )
}

export default Home

// inline-flex items-center justify-center p-4