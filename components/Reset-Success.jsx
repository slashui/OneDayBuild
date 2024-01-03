import React from 'react'

const ResetSuccess = () => {
  return (
    <div className='w-full h-screen bg-black text-zinc-200 flex justify-center items-center flex-col'><h1 className='text-4xl text-primary font-inter mb-2'>Reset Successful</h1>Your password has been reset. <br />Please click the login button to access the platform.<a type="submit" class=" mt-6  rounded-full py-3 text-black font-medium w-1/3 bg-primary hover:bg-primary/80  border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">Login</a></div>

  )
}

export default ResetSuccess