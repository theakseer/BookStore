import React from 'react'
import {Link} from 'react-router-dom'
import {BiUserCircle} from 'react-icons/bi'
import {PiBookOpenTextLight} from 'react-icons/pi'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineDelete} from 'react-icons/md'

const BookCard = ( {books}) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {books.map(item=>(
          <div key={item._id}
          className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'
          >
            <h2 className='absolute top-1 right-2 bg-red-400 text-white px-4 py-1 rounded-md'>{item.publishYear}</h2>
            <h4 className='text-sm mb-3'>{item._id}</h4>
            <div className='flex justify-start items-center gap-x-2'>
              <PiBookOpenTextLight className='text-red-400 text-2xl'/>
              <h2 className='my-1'>{item.title}</h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
              <BiUserCircle className='text-red-400 text-2xl'/>
              <h2 className='my-1'>{item.author}</h2>
            </div>
            <div className='flex justify-around'>
              <Link to={`/book/details/${item._id}`} > <BsInfoCircle className='text-2xl hover:text-green-300 transition ease-in-out duration-600 text-green-800 mt-4 mb-2 '/> </Link>
              <Link to={`/book/edit/${item._id}`} > <AiOutlineEdit className='text-2xl  text-yellow-600 hover:text-yellow-300 transition ease-in-out duration-600 mt-4 mb-2 '/> </Link>
              <Link to={`/book/delete/${item._id}`} > <MdOutlineDelete className='text-2xl text-red-600 hover:text-red-300 transition ease-in-out duration-600 mt-4 mb-2 '/> </Link>
            </div>
          </div>  
        ))}
    </div>
  )
}

export default BookCard