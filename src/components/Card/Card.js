import React from 'react'
import {BsSuitHeart} from 'react-icons/bs'
import {FaRegComment} from 'react-icons/fa'
import {BsBookmark} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const Card = ({ image ,detailPage}) => {
    const tags = image.tags.split(',');
    const navigate =  useNavigate()


    const handleClick = (id)=>{
        navigate(`/photos/${id}`,{
            state: {id}
        }
        )
    }


    return (
        <div className= {`card group ${detailPage?'max-w-[70%] ':'max-w-sm'} ${!detailPage && 'h-[300px] w-full max-h-fit'}  rounded overflow-hidden shadow-lg m-1 relative cursor-pointer `}onClick={()=>handleClick(image.id)}>
            <img className=" w-full h-full " src={detailPage? image.largeImageURL:image.webformatURL} alt="pixabay-images" loading='lazy' />
           
            <div className={`card-bottom-info w-full justify-between absolute px-1 py-2  transition-all group-hover:flex ${detailPage?'-top-12':'-bottom-12 '} ${detailPage? 'group-hover:top-0':'group-hover:bottom-0'} `}   style={{background:`linear-gradient(${detailPage?'180deg':'0deg'},rgba(0,0,0,.6) 0,transparent)`}}>
                <div className={`tags ${detailPage?'w-full': 'w-1/2'} ${!detailPage &&'text-ellipsis whitespace-nowrap overflow-hidden'} `} >
                {tags.map((tag,index)=>(
                    <span key={index} className={`px-1 ${detailPage?'text-lg':'text-sm'} font-semibold text-white m-1`}>
                    {tag}
                    </span>
                ))}
                </div>
                <div className={`like comments-wrapper text-sm text-white ${detailPage? 'hidden':'flex'}`} >
                    <div className="like flex items-center ml-2">
                    <span className='w-4 h-4 upload-icon mx-1'><BsSuitHeart style={{width:"100%",height:"100%"}}/></span>
                    {image.likes}
                    </div>
                    <div className="comments flex items-center ml-2">
                    <span className='w-4 h-4 upload-icon mx-1'><FaRegComment style={{width:"100%",height:"100%"}}/></span>
                    {image.comments}
                    </div>
                    <div className="collections flex items-center ml-2">
                    <span className='w-4 h-4 upload-icon mx-1'><BsBookmark style={{width:"100%",height:"100%"}}/></span>
                    
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Card