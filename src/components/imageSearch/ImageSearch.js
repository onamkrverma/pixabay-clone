import React, { useState } from 'react'
import {RxCaretDown} from 'react-icons/rx'
import {GoSearch} from 'react-icons/go'


const ImageSearch = ({searchText}) => {
  const [text, setText] = useState('')

  const handleOnSubmit = (e)=>{
    e.preventDefault()
    searchText(text)
  }

  return (
      <div className=" flex items-center border border-inherit rounded bg-[#f7f7f7]">
        <span className='p-2 text-[#808080]'><GoSearch/></span>
        <form onSubmit={handleOnSubmit} className='w-full flex'>
          <input onChange={(e)=>setText(e.target.value)} className=' bg-inherit border-none w-full outline-none ' type="text" placeholder='Search for all images on Pixabay' />
          <button className='submit-btn' type='submit'></button>
        </form>
        <div className="select-box flex items-center bg-white text-[#808080] leading-7 m-1 ml-4 px-3">
          <span>Images</span>
          <span className='w-6 h-6 caret'><RxCaretDown style={{width:"100%",height:"100%"}}/></span>
        </div>
        
      </div>
  
  )
}

export default ImageSearch