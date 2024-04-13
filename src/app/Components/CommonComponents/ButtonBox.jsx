import React from 'react'

export default function ButtonBox(props) {
  return (
    <div className='py-4 px-10'>
      <button className='w-full py-2 px-4 my-1 rounded-xl bg-slate-800 text-rose-50' type='button' onClick={props.postsomething}>Post something</button>
      <button className='w-full py-2 px-4 my-1 rounded-xl bg-slate-800 text-rose-50' type='button' onClick={props.showaddnotebox}>Add Note</button>
      <button className='w-full py-2 px-4 my-1 rounded-xl bg-slate-800 text-rose-50' type='button' onClick={props.showmynotebox}>My Note</button>
    </div>
  )
}