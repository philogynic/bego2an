import {useState} from 'react'
import Link from 'next/link'
import { useAuth } from '../lib/auth'


export default function Donate() {
  const auth = useAuth()
  
  const onClick = () => {
    console.log(auth.user)
  }

  return (
      <div className='font-mono bg-gray-300 h-screen flex flex-col'>
        <div className='w-64 bg-gray-100 mx-auto my-auto rounded-xl px-3 py-4 flex flex-col'>
          <div className='flex justify-end'>
              <Link href='/dashboard'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  className='stroke-current text-indigo-400 w-4 h-4 cursor-pointer'>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Link> 
          </div>
          <div className='font-bold text-lg text-gray-700'>pesen2nya, <span className='text-yellow-400'>bro</span>:</div>
          <textarea className='w-full rounded-md p-1' rows='4'
            placeholder='ngntod lo hahaha...'></textarea>
          {auth.user ? (<div>dari <span className='font-bold break-words'>{auth.user.email}</span></div>):(<div></div>)}
          <div className='flex font-bold justify-between mt-6'>
            <div className='bg-indigo-100 px-5 py-1 rounded-xl text-indigo-500'>5k</div>
            <div className='bg-indigo-100 px-5 py-1 rounded-xl text-indigo-500'>10k</div>
            <div className='bg-indigo-100 px-5 py-1 rounded-xl text-indigo-500'>50k</div>
          </div>
          <div onClick={onClick} className='bg-indigo-100 font-bold text-2xl px-5 py-1 rounded-xl text-indigo-500 text-center mt-4'>kasih duit</div>
          {auth.user ? (
            <div className='font-bold text-md text-gray-700 mt-4 mb-4 text-center'>
              <button onClick={() => {auth.signout()}} className='text-yellow-400 underline'>
                logout
              </button> biar anonymous
            </div>
          ) : (
            <div className='font-bold text-md text-gray-700 mt-4 mb-4 text-center'> <Link href='/login'><a className='text-yellow-400 underline'>login</a></Link> biar ga anonymous</div>
          )}
          
        </div>
      </div>
    )
  }
  