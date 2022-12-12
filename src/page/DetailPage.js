import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const DetailPage = () => {
  const apiKey = process.env.REACT_APP_PIXABAY_API_KEY;
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { state } = useLocation()
  const { id } = state

  const apiCall = async () => {
    try {
      const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&id=${id}`);
      const data = await response.json();
      console.log(data);
      setImages(data.hits);
      setIsLoading(false);

    } catch (error) {
      console.log(error)
    }


  }

  useEffect(() => {
    apiCall()
  }, [])

  console.log(images)

  return (
    <div>
      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">loading...</h1>
        : <div className=' m-5'>
          <div className='flex justify-center flex-wrap '>
            {images.map((image) =>
              <img src={image.webformatURL} alt="photos" key={image.id} />
            )}
          </div>
        </div>

      } 
    </div>
  )
}

export default DetailPage