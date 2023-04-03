import React from 'react'

const Pay = ({visible}) => {
  if(!visible)
  return null;
  return (
    <div className='absolute inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center'>
      <div className='bg-white p-2 rounded-sm'>Pay</div>

      </div>
  )
}

export default Pay