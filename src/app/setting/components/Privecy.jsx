import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'

export default function Privecy({closePrivecyBox}) {
  return (
    <>
        <ul>
          <li className='text-2xl text-white py-2 my-2 px-4 cursor-pointer rounded shadow' onClick={closePrivecyBox}><IoMdArrowBack /></li>
        </ul>
    </>
  )
}