import { Link } from 'react-router-dom'
import {  MdOutlineCreate, MdOutlineDelete, MdOutlineInfo } from "react-icons/md";


const BookTable = ({books}) => {
  return (
    <table className="w-full border-separate border-spacing-2">
            <thead>
              <tr>
                <th className='border border-slate-600 rounder-md'>No.</th>
                <th className='border border-slate-600 rounder-md'>Title</th>
                <th className='border border-slate-600 rounder-md max-md:hidden'>Author</th>
                <th className='border border-slate-600 rounder-md max-md:hidden'>Publish Year</th>
                <th className='border border-slate-600 rounder-md'>Opertions</th>
              </tr>
            </thead>
            <tbody>
              {
                books.map((book, index) =>(
                  <tr key={book._id} className='h-8'>
                      <td className='border border-slate-700 rounded-md text-center'>{index+1}</td>
                      <td className='border border-slate-700 rounded-md text-center'>{book.title}</td>
                      <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{book.author}</td>
                      <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{book.publishYear}</td>
                      <td className='border border-slate-700 rounded-md text-center'>  
                      <div className='flex justify-center gap-x-4'>
                        <Link to={`/book/details/${book._id}`}  >
                          <MdOutlineInfo className='text-2xl hover:text-green-300 transition ease-in-out duration-600 text-green-800' />
                        </Link>
                        <Link to={`/book/edit/${book._id}`} >
                          <MdOutlineCreate className='text-2xl  text-yellow-600 hover:text-yellow-300 transition ease-in-out duration-600'  />
                        </Link>
                        <Link to={`/book/delete/${book._id}`} className='text-2xl text-red-600 hover:text-red-300 transition ease-in-out duration-600' >
                          <MdOutlineDelete/>
                        </Link>
                      </div>
                      </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
  )
}

export default BookTable