import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { MdOutlineAddBox  } from "react-icons/md";
import Spinner from '../components/Spinner'
import BookTable from '../components/home/BookTable';
import BookCard from '../components/home/BookCard';

const Home = () => {
  const [books, setBooks] = useState([])
  const [showType, setShowType] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:8080/books')
      .then(response => {
        setBooks(response.data.data)
        // console.log(response.data.data)
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      })
  }, [])
  return (
    <div>
      <div className='flex justify-between items-center px-10'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <div className='flex flex-row gap-x-10 text-xl'>
          <button className='bg-sky-600 text-white p-2 py-1 rounded-lg transition hover:bg-sky-400' onClick={()=>setShowType('table')}>Table</button>
          <button className='bg-sky-600 text-white p-2 py-1 rounded-lg transition hover:bg-sky-400' onClick={()=>setShowType('card')}>Card</button>
        </div>
        <Link to='/book/create'>
          <MdOutlineAddBox className='text-sky-800 text-3xl' />
        </Link>
      </div>
      {
        loading ? <Spinner /> 
        : showType ==='table' 
        ? <BookTable books={books}/> 
        : <BookCard books={books}/>
      }
    </div>
  )
}

export default Home