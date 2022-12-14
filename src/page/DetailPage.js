import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Card from '../components/Card/Card';
import Header from '../components/header/Header';
import { BsSuitHeartFill ,BsBookmark , BsShareFill} from 'react-icons/bs'
import { FiDownload} from 'react-icons/fi'



const DetailPage = () => {
  const apiKey = process.env.REACT_APP_PIXABAY_API_KEY;
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');
  const { state } = useLocation()
  const { id } = state

  const apiCall = async () => {
    try {
      const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&id=${id}`);
      const data = await response.json();
      // console.log(data);
      setImages(data.hits);
      setIsLoading(false);

    } catch (error) {
      console.log(error)
    }


  }

  useEffect(() => {
    apiCall()
  }, [])

 

  return (
    <div className='conatiner mx-auto'>
      <Header setTerm={setTerm} />

      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">loading...</h1>
        : <div className=' m-5'>

          {images.map((image) => {
            return (
              <div className='flex flex-wrap  sm:justify-between' key={image.id}>
                <Card image={image} detailPage={'detailPage'} />


                <div className="other-info mt-4 sm:mt-0 ">
                  <div className="uploader-profile-wrapper  ">
                    <div className="name-logo flex items-center">
                      <img className='w-[48px] rounded-3xl mr-3 ' src={image.userImageURL} alt="uploder-logo" />
                      <div className="name-coffee-follow-wrapper flex flex-col  ">
                        <div className="profile-name">{image.user}</div>
                        <div className="coffee-follow-wrapper text-xs flex">
                          <div className="coffee text-white bg-[#02be6e] rounded-3xl  px-[12px] py-[6px] m-2">coffee</div>
                          <div className="follow text-black bg-[#e6e6e6] rounded-3xl px-[12px] py-[6px] m-2">follow</div>
                        </div></div>
                    </div>
                  </div>
                  <div className="likes-collection-share-wrapper flex items-center border-y-[1px] border-[#e6e6e6] border-solid my-[20px] py-[14px] ">
                    <div className="likes flex items-center justify-center w-[80px] max-w-[100px] bg-[#008ddf] rounded-3xl text-white text-sm px-3 py-1 mx-2">
                      <span className='w-4 h-4 upload-icon mx-1  '><BsSuitHeartFill style={{ width: "100%", height: "100%" }} /></span>
                      <span>{image.likes}</span>
                    </div>
                    <div className="collection">
                    <div className="likes flex items-center justify-center w-[80px] max-w-[100px] bg-[#008ddf] rounded-3xl text-white text-sm px-3 py-1 mx-2">
                      <span className='w-4 h-4 upload-icon mx-1  '><BsBookmark style={{ width: "100%", height: "100%" }} /></span>
                    </div>
                    </div>
                    <div className="share">
                    <div className="likes flex items-center justify-center w-[80px] max-w-[100px] bg-[#e6e6e6] rounded-3xl text-black text-sm px-3 py-1 mx-2">
                      <span className='w-4 h-4 upload-icon mx-1  '><BsShareFill style={{ width: "100%", height: "100%" }} /></span>
                    </div>
                    </div>
                  </div>

                  <div className="download-btn  ">
                    <a href={image.pageURL} target="_blank" rel='noreferrer' ><button className='w-full flex items-center justify-center bg-[#02be6e] rounded-3xl px-[22px] py-[10px] text-white' >
                    <span className='w-4 h-4 upload-icon mx-1  '><FiDownload style={{ width: "100%", height: "100%" }} /></span>
                     Free download from Pixabay
                      </button></a> 
                  </div>
                </div>

              </div>
            )
          }
          )}

        </div>

      }
    </div>
  )
}

export default DetailPage