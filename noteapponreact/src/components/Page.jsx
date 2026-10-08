import React from 'react'

const Page = () => {
  return (
    <div>
    <form className='flex flex-col bg-amber-400' action="">
      <h1>Note App:</h1>
      <input className="py-2 px-3" type="text" />
      <input className="py-2 px-3" type="text" />
      <button>Add</button>
    </form>
    </div>
  )
}

export default Page