import React from 'react'

const Card = ({ image }) => {
    const tags = image.tags.split(',');
    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg m-2">
            <img className=" w-full h-[400px] object-cover" src={image.webformatURL} alt="pixabay-images" loading='lazy' />
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">
                    Photo by {image.user}
                </div>

                <ul>
                    <li>
                        <strong>View: </strong>
                        {image.views}
                    </li>
                    <li>
                        <strong>Downloads: </strong>
                        {image.downloads}
                    </li>
                    <li>
                        <strong>Like: </strong>
                        {image.likes}
                    </li>
                </ul>
            </div>
            <div className=" px-6 py-4">
                {tags.map((tag,index)=>(
                    <span key={index} className=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1">
                    #{tag}
                    </span>
                ))}
                
                
            </div>
        </div>
    )
}

export default Card