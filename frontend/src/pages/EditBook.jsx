import React, { useEffect } from 'react'
import axios from 'axios'
import BackButton from '../components/BackButton'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'


const EditBook = () => {

  const [title, setTitle] = useState('') 
  const [author, setAuthor] = useState('') 
  const [publishYear, setPublishYear] = useState('') 
  const [loading, setLoading] = useState(false) 
  const {id} = useParams()

  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:8080/books/${id}`)
     .then(response=>{
      setTitle(response.data.title)
      setAuthor(response.data.author)
      setPublishYear(response.data.publishYear)
      setLoading(false)
      // console.log(response)
     })
     .catch(error => {
      setLoading(false)
      console.error(error)
     })

  },[])

  const navigate = useNavigate()
  
  const handleEditBook = () => {
    const data = {title, author, publishYear}
    setLoading(true)
    axios
      .put(`http://localhost:8080/books/${id}`, data)
      .then((res) =>{
        setLoading(false)
        alert(res.data.message);
        navigate('/')
      })
      .catch((error) => {
        setLoading(false)
        // alert("Something went wrong!")
        alert(error.response.data.message);
        // console.error(error)
      })
  }
  
  return (
    <div className='p-4'>
      <BackButton destination='/'/>
      <h1 className='text-3xl my-4'>Edit this book :</h1>
      {
        loading ? <Spinner/> : ""
      }
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[70vw] md:w-[600px] lg:w-[600px] p-2 mx-auto'>
        <div className='my-4'> <label htmlFor="" className='text-xl mr-4 text-gray-500'>Title</label> <input className='border-2 border-gray-500 px-1 py-2 w-full rounded-md' type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/> </div>
        <div className='my-4'> <label htmlFor="" className='text-xl mr-4 text-gray-500'>Author</label> <input className='border-2 border-gray-500 px-1 py-2 w-full rounded-md' type="text" onChange={(e)=>setAuthor(e.target.value)} value={author}/> </div>
        <div className='my-4'> <label htmlFor="" className='text-xl mr-4 text-gray-500'>Publish Year</label> <input className='border-2 border-gray-500 px-1 py-2 w-full rounded-md' type="text" onChange={(e)=>setPublishYear(e.target.value)} value={publishYear}/> </div>
        <button onClick={handleEditBook} className='py-2 bg-sky-300 m-8'>Save</button>
      </div>
    </div>
  )
}

export default EditBook