import React from 'react'
import {BsArrowLeft} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const BackButton = ({destination = '/'}) => {
    return (
      <div className='flex px-2 py-2'>
          <Link  to={destination} className='bg-sky-950 px-4 py-1 text-white rounded-lg w-fit'>
              <BsArrowLeft className='text-2xl'/>
          </Link>
      </div>
    )
  }
  
  export default BackButton