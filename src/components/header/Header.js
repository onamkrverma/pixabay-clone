import React from 'react'
import ImageSearch from '../imageSearch/ImageSearch'
import {RxCaretDown} from 'react-icons/rx'
import {AiFillBell} from 'react-icons/ai'
import {FiUpload} from 'react-icons/fi'


const Header = ({setTerm}) => {
  return (
    <div className='w-full flex items-center justify-between  h-[64px] bg-white px-[32px] shadow-lg'>
      <div className="header-left flex items-center">
        <div className="logo h-[42px] w-[40px] mr-10">
          <img className='w-full h-full object-cover' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Pixabay-logo-new.svg/48px-Pixabay-logo-new.svg.png" alt="logo" />
        </div>
        <div className="search-box-wrapper w-[500px]">
        <ImageSearch searchText={(text)=>setTerm(text)}/>
        </div>
      </div>
      <div className="header-right flex items-center justify-around ">
        <div className="explore flex items-center">Explore 
        <span className='w-6 h-6 caret'><RxCaretDown style={{width:"100%",height:"100%"}}/></span>
        <span className='w-4 h-4 bell mx-4 my-2'><AiFillBell style={{width:"100%",height:"100%"}}/></span>
        
        </div>
        <div className="profile-icon h-[32px] w-[32px]">
          <img className='w-full h-full rounded-2xl' src="https://pixabay.com/static/img/profile_image_dummy.svg" alt="" />
        </div>
        <div className="upload-wrapper mx-5 ">
         <button className='upload-btn flex items-center bg-[#02be6e] text-white px-6 py-1 rounded-[50px] leading-7 ' >
         <span className='w-4 h-4 upload-icon mx-1'><FiUpload style={{width:"100%",height:"100%"}}/></span>
          Upload
          </button> 
          </div>
      </div>
    </div>
  )
}

export default Header