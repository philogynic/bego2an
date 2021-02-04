import {useState} from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { useAuth } from '../lib/auth'
import { useForm } from 'react-hook-form'
import { createDonation } from '../lib/db'


export default function Donate() {
  const auth = useAuth()

  const {handleSubmit, register, errors} = useForm()
  
  const onSubmit = handleSubmit(async (formData) => {
    const newDonation = {
      donatorId: auth.user?(auth.user.uid):('anon'),
      donatorEmail: auth.user?(auth.user.email):('anon'),
      text: formData.text,
      donationAmount: formData.donationAmount,
      createdAt: new Date().toISOString()
    }
    console.log(newDonation)
    await createDonation(newDonation)
    Router.push('/dashboard')

  })

  return (
      <div className='font-mono bg-gray-300 h-screen flex flex-col'>
        <form onSubmit={onSubmit} className='w-64 bg-gray-100 mx-auto my-auto rounded-xl px-3 py-4 flex flex-col'>
          <div className='flex justify-end'>
              <Link href='/dashboard'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  className='stroke-current text-indigo-400 w-4 h-4 cursor-pointer'>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Link> 
          </div>
          <div className='font-bold text-lg text-gray-700'>pesen2nya, <span className='text-yellow-400'>bro</span>:</div>
          <textarea 
            className='w-full rounded-md p-1' 
            rows='4'
            placeholder='ngntod lo hahaha...'
            name='text'
            ref={register()}
            ></textarea>
          {auth.user ? (<div>dari <span className='font-bold break-words'>{auth.user.email}</span></div>):(<div></div>)}
          {/* <div className='flex font-bold justify-between mt-6'>
            <div className='bg-indigo-100 px-5 py-1 rounded-xl text-indigo-500'>5k</div>
            <div className='bg-indigo-100 px-5 py-1 rounded-xl text-indigo-500'>10k</div>
            <div className='bg-indigo-100 px-5 py-1 rounded-xl text-indigo-500'>50k</div>
          </div> */}

          <label className="block mt-4">
            <span className="text-gray-700">jumlah donasi</span>
            <select className="form-select mt-1 block w-full" name='donationAmount' ref={register}>
              <option>$1,000</option>
              <option>$5,000</option>
              <option>$10,000</option>
              <option>$25,000</option>
            </select>
          </label>

          <button 
            type='submit'
            className='bg-indigo-100 font-bold text-2xl px-5 py-1 rounded-xl text-indigo-500 text-center mt-4'
            >
              kasih duit
          </button>
          {auth.user ? (
            <div className='font-bold text-md text-gray-700 mt-4 mb-4 text-center'>
              <button onClick={() => {auth.signout()}} className='text-yellow-400 underline'>
                logout
              </button> biar anonymous
            </div>
          ) : (
            <div className='font-bold text-md text-gray-700 mt-4 mb-4 text-center'> <Link href='/login'><a className='text-yellow-400 underline'>login</a></Link> biar ga anonymous</div>
          )}
          
        </form>
      </div>
    )
  }
  