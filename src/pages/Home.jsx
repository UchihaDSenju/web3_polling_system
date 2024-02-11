import React, { useContext } from 'react'
import { StateContext } from '../context'

const Home = () => {
    const context = useContext(StateContext);
    context.getOwnerAddress();
  return (
    <div>The Context is {context.formData.name}</div>
  )
}

export default Home