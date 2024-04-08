import React, { useState } from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const DeleteBook = () => {
  const [loading, setLoading]= useState(false)
  const navigate = useNavigate()
  const {id} = useParams()
  const handleDeleteBook = () => {
    setLoading(true)
    axios.delete(`https://backend-bookstore-jpni.onrender.com/books/${id}`)
      .then(res=>{
        // console.log(res)
        setLoading(false)
        navigate('/')
      })
      .catch(err =>{
        setLoading(false)
        alert("Something went wrong!!")
        // console.log(err)
      })
  }
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl py-6'>Delete Book</h1>
       {loading ? <Spinner/>: ""}
      <div className='flex flex-col item-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3>Are you sure you want to delete this book</h3>
        <button
          onClick={handleDeleteBook}
          className='bg-red-600 text-white my-8 py-2 w-full'
        >Yes, delete this.
        </button>
      </div>
    </div>
  )
}

export default DeleteBook