import React from 'react'

const Page = () => {
  return (
    <div>
    <form className='flex flex-col bg-gray-500  gap-4 p-4 w-1/2 h-dvh' action="">
      <h1>Note App:</h1>
      <input className="py-2 px-3 border-2 border-white outline-none rounded-2xl" type="text" placeholder='Enter Your Title'/>
      <textarea className="py-2 px-3  border-white border-2 outline-none rounded-2xl h-34" name="" id="" placeholder='Add you note'></textarea>
      <button className='bg-blue-500 text-black py-1 px-4 '>Add</button>
    </form>
    </div>
  )
}

export default Page