import Link from 'next/link'
import Modal from 'react-modal'
import {useState} from 'react'


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    // marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default function Home() {

  return (
    <div className='font-mono bg-gray-100 h-screen'>
      <div className='max-w-xl mx-auto items-center flex flex-col'>
        <h1 className='text-5xl py-10 font-bold text-gray-500 mt-64'>hello,
          <span className='text-yellow-400'> bro</span>
        </h1>
        <div className='bg-indigo-100 py-2 px-4 rounded-xl font-bold text-indigo-500'>
          <Link href='/dashboard'>bagi duit dong..</Link>
        </div>
      </div>
    </div>
  )
}
