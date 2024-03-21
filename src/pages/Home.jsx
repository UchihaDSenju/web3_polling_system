import React, { useContext } from 'react'
import { StateContext } from '../context'
import { FaAndroid, FaWindows } from "react-icons/fa";
import { IoLogoAndroid, IoLogoWindows } from "react-icons/io";

const Home = () => {
    const context = useContext(StateContext);
    context.getOwnerAddress();
  return (
    <>
      <div>
        

        <div class="border-b border-gray-200 dark:border-gray-700 w-[25%] mx-auto">
            <ul class="flex justify-center -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                <li class="me-2">
                    <a href="#" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                        <IoLogoWindows className='text-2xl mr-2'/><h1>Windows</h1>
                    </a>
                </li>
                <li class="me-2">
                    <a href="#" class="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
                        <IoLogoAndroid className='text-3xl mr-2'/><h1>Android</h1>
                    </a>
                </li>
            </ul>
        </div>

      </div>
    </>
  )
}

export default Home