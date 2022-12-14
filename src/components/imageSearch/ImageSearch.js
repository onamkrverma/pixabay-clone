import React, { useState } from 'react'
import {RxCaretDown,RxCross2} from 'react-icons/rx'
import {GoSearch} from 'react-icons/go'
import { useNavigate } from 'react-router-dom'


const ImageSearch = ({searchText ,detailPage ,isSearchActive,setIsSearchActive}) => {
  const [text, setText] = useState('')
   const navigate = useNavigate()

  const handleOnSubmit = (e)=>{
    e.preventDefault()
    searchText(text)
    if(detailPage){
      navigate('/',{
        state:{text}
      })
    }
  }

 
    console.log(isSearchActive);
  return (
    <>
    <div className={`search-icon  ${isSearchActive?'hidden':'block'} sm:hidden`}>
      <span className='p-2 text-[#808080]' onClick={()=>setIsSearchActive(true)}><GoSearch/></span>
    </div>

      <div className= {`${isSearchActive?'flex':'hidden'} sm:flex items-center border border-inherit rounded bg-[#f7f7f7]`}>
        <span className={`p-2 text-[#808080] ${isSearchActive?'hidden':'block'}`}><GoSearch/></span>
        <form onSubmit={handleOnSubmit} className={`w-full flex ${isSearchActive?'p-1':''}`}>
          <input onChange={(e)=>setText(e.target.value)}  className=' bg-inherit border-none w-full outline-none ' type="text" placeholder='Search for all images on Pixabay' />
          <button className='submit-btn' type='submit'></button>
        </form>
        <div className={`select-box flex items-center bg-white text-[#808080] leading-7 m-1 px-3 ${isSearchActive?'ml-0':'ml-4'} `}>
          <span>Images</span>
          <span className='w-6 h-6 caret'><RxCaretDown style={{width:"100%",height:"100%"}}/></span>
          
        </div>
        <div className="cross-btn w-[35px] text-[#808080] cursor-pointer sm:hidden" onClick={()=>setIsSearchActive(false)}>
        <span className='w-6 h-6 cross'><RxCross2 style={{width:"100%",height:"100%"}}/></span>
        </div>
      </div>
  </>
  )
}

export default ImageSearch