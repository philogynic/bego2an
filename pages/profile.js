import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '../lib/auth'


export default function Profile() {

    const auth = useAuth()


    return (
      <div className='font-mono bg-gray-100 h-screen px-4 py-8 sm:px-20 sm:py-14'>
        <div className='mb-4'>
            <Link href='/dashboard'>
                <a className='text-4xl sm:text-5xl font-bold text-gray-500'>
                    hello,
                </a>
            </Link>
            
            {auth.user? (
                <h2 className='text-xl break-words md:text-3xl font-bold text-yellow-400'>
                    {auth.user.email}
                </h2>
            ) : (
                <div></div>
            )}
            
            {/* <p className='font-bold md:text-xl text-gray-500'>
                {auth.user} tier{auth.user.day_last > 0 ? (<span>, sisa {auth.user.day_last} hari</span>):(<span></span>)}
            </p> */}
        </div>
        <div className='flex space-x-4 md:space-x-10 content-center text-gray-600 md:p-2 md:max-w-2xl md:mx-auto md:text-2xl'>
            <div className='flex flex-col w-1/2 bg-indigo-100 p-2 md:p-4 rounded-lg space-y-3 md:space-y-10 justify-between'>
                <h1 className='font-bold text-lg md:text-3xl'>free tier</h1>
                <div className='m-2'>
                    <p className='text-md leading-none'>- cuma ngga anon aja</p>
                </div>
                {/* {user.tier == 'free'? (
                    <p className='text-md leading-none'>kamu lagi pake ini skrng</p>
                ) : (
                    <button className='bg-indigo-400 font-bold text-white rounded-xl p-2'>
                        balik jadi gratisan
                    </button>
                )} */}
                
            </div>
            <div className='flex flex-col w-1/2 bg-indigo-100 p-2 md:p-4 rounded-lg space-y-3 md:space-y-10 justify-between'>
                <h1 className='font-bold text-lg md:text-3xl'>jancux tier</h1>
                <div className='m-2'>
                    <p className='text-md leading-none'>- gratis posting 5x per hari</p>
                </div>
                {/* {user.tier == 'jancux'? (
                    <p className='text-md leading-none'>kamu lagi pake ini skrng, sisa {user.day_last} hari</p>
                ) : (
                    <div></div>
                )} */}



                <button className='bg-indigo-400 font-bold text-white rounded-xl p-2'>
                    {/* {user.tier == 'jancux' ? (
                        'tambah sisa hari 10rb/30hr'
                    ) : 'upgrade 10rb/bulan'} */}
                    
                </button>
            </div>
        </div>
        <button onClick={() => {auth.signout()}} className='bg-indigo-400 font-bold text-white rounded-xl p-1 mt-4 md:text-2xl'>
            logout
        </button>
        
      </div>
    )
  }
  