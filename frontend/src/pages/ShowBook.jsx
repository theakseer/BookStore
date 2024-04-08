import React, { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../components/Spinner'

const ShowBook = () => {
  const {id} = useParams()
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get(`https://backend-bookstore-jpni.onrender.com/books/${id}`)
    .then(response=>{
      setBook(response.data)
      setLoading(false)
    })
    .catch(error=>{
      console.log(error)
      setLoading(false)
    })
  },[])
  
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Showing the details below:</h1>
      {
        loading ? (<Spinner/>) : (
          <div className='flex flex-col border-2 border-sky-200 rounded-xl w-fit p-4'>
            <div className='my-4 text-lg'><span className='text-xl mr-4 text-gray-500'>Id:</span> <span>{book._id}</span></div>
            <div className='my-4 text-lg'><span className='text-xl mr-4 text-gray-500'>Title:</span> <span>{book.title}</span></div>
            <div className='my-4 text-lg'><span className='text-xl mr-4 text-gray-500'>Author:</span> <span>{book.author}</span></div>
            <div className='my-4 text-lg'><span className='text-xl mr-4 text-gray-500'>Publish Year:</span> <span>{book.publishYear}</span></div>
            <div className='my-4 text-lg'><span className='text-xl mr-4 text-gray-500'>Create Time:</span> <span>{new Date(book.createdAt).toString()}</span></div>
            <div className='my-4 text-lg'><span className='text-xl mr-4 text-gray-500'>Last Updated Time:</span> <span>{new Date(book.updatedAt).toString()}</span></div>
          </div>
        )
      }
    </div>
  )
}

export default ShowBook