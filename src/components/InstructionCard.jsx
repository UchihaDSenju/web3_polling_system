import React from 'react'
import { datas } from '../constants'

const InstructionCard = ({image, insNumber, title, desc}) => {
  return (
    <div className='flex flex-col gap-1 mb-6'>
        <img className='rounded-lg h-[200px] object-contain w-fit mx-auto' src={image}></img>
        <h1 className='text-xl text-amber-500'>{insNumber}.{title}</h1>
        <p>{desc}</p>
    </div>
  )
}

export default InstructionCard