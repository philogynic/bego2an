import {useState} from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import fetcher from '../utils/fetcher'
import {parseISO, format} from 'date-fns'

export default function Dashboard() {

    // const [posts, setPosts] = useState([
    //     {'id': 1, 'post': 'ngntd lah hahaha..', 'donation_amount': 20000},
    //     {'id': 2, 'post': 'moga berkah nih bro /n lanjutkan', 'donation_amount': 2000, 'user_email': 'sulaeman@gmail.com'}
    // ])

    const {data} = useSWR('/api/donations', fetcher)
    if (!data) {
        console.log(data)
        return <div>no data</div>
    }

    if (data.donations.length) {
        console.log(data.donations)
        return (
        <div className='font-mono bg-gray-100 overflow-hidden h-screen px-4 py-8 sm:px-20 sm:py-14'>
            <div className='mb-4 sm:mb-14'>
                <h1 className='text-4xl sm:text-5xl font-bold text-gray-500'>hello,
                    <Link href='/profile'><a className='text-yellow-400'> bro</a></Link>
                </h1>
            </div>
            <div className='flex flex-col h-screen sm:flex-row-reverse sm:space-x-10 sm:space-x-reverse'>
                <div className='flex sm:flex-col sm:w-1/2 mb-6 items-center sm:items-start'>
                    <h1 className='text-xl sm:text-4xl font-bold text-gray-700'> 
                        <span className='text-gray-400'>Rp. </span>
                        2.200.000
                        <span className='text-gray-400 invisible sm:visible'>,00</span>
                    </h1>
                    <Link href='/donate'><a className='bg-indigo-100 px-2 sm:px-4 py-1 sm:py-2 sm:my-4 font-bold sm:text-2xl text-indigo-500 rounded-xl'>bagi duit</a></Link>
                </div>
                <div className='sm:w-1/2 overflow-y-auto h-4/6 p-4 border-4 rounded-xl border-indigo-900'>
                    <div className=' flex flex-col space-y-2'>
                        {data.donations ? (
                            data.donations.map(p => {
                                return (
                                    <div className='border-4 border-indigo-600 bg-indigo-100 rounded-lg p-3 font-bold text-gray-700 text-lg shadow-xl' key={p.id}>
                                        <div className='text-indigo-500 text-base'>
                                            Rp. {p.donationAmount},00
                                            <span className='text-gray-700'> dari {p.donatorEmail? p.donatorEmail : 'anon'}</span>
                                        </div>
                                        <div className='text-xl text-red-600'>{p.text}</div>
                                        <div className='text-sm'>{format(parseISO(p.createdAt), 'PPpp')}</div>
                                    </div>
                                    
                                )
                            })
                        ) : (
                            <div>loading...</div>
                        )}
                        <div className=' flex flex-col space-y-2'>Load More</div>
                    </div>
                
                </div>
            </div>
        </div>
        )
    }

    
  }
  