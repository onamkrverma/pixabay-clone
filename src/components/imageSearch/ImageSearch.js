import React, { useState } from 'react'

const ImageSearch = ({searchText}) => {
  const [text, setText] = useState('')

  const handleOnSubmit = (e)=>{
    e.preventDefault()
    searchText(text)
  }

  return (
    <div className=' max-w-sm rounded overflow-hidden my-10 mx-auto '>
      <div className=" flex items-center border border-inherit rounded-xl p-2 ">
        <span className='px-2'><i className="fa-solid fa-magnifying-glass"></i></span>
        <form onSubmit={handleOnSubmit} className='w-full max-w-sm flex'>
          <input onChange={(e)=>setText(e.target.value)} className=' bg-none border-none w-full outline-none ' type="text" placeholder='Search for all images on Pixabay' />
          <button className=' bg-green-600 rounded-lg p-2 text-white' type='submit'>Search</button>
        </form>
        
      </div>
    </div>
  )
}

export default ImageSearch