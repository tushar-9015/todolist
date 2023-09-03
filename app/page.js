"use client"

import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
     e.preventDefault()
     setmainTask([...mainTask, { title, desc }])
     settitle("")
     setdesc("")
  }

  const deleteHandler = (i) => {
    let remove = [...mainTask]
    remove.splice(i,1)
    setmainTask(remove)
  }

  let renderTask = <h2 className='text-xl font-semibold'>No Available Task for you.</h2>

  if(mainTask.length>0){
    renderTask = mainTask.map((t, i) => {
      return (
        <>
          <div className='flex justify-between mb-5 items-center p-5'>
            <h5 className='text-black text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-gray-500 text-xl font-lg'>{t.desc}</h6>
            <button className='bg-2 text-xl bg-red-500 text-white px-4 py-2 rounded'
            onClick={()=> {
              deleteHandler(i)
            }}>Delete</button>
          </div>
        </>
      )
    })
  }
  
  return (
    <>
    <h1 className='bg-black  text-6xl font-bold p-5 text-white text-center' >TodoList</h1>
    <form onSubmit={submitHandler}>
      <input 
      type='text'
      placeholder='Enter Title'
      className='border-zinc-800 py-2 px-4 m-8 text-2xl rounded border-2'
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />

      <input 
      type='text'
      placeholder='Enter Description'
      className='border-zinc-800 py-2 px-4 m-8 text-2xl rounded border-2'
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
      />

      <button className='bg-black py-2 text-2xl px-4 m-8 text-white rounded-md'>Add Item</button>
    </form>
    <div className='bg-slate-200 p-8'>{renderTask}</div>
    </>
  )
}

export default page

