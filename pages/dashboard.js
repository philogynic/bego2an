import {useState} from 'react'


export default function Dashboard() {

    const [posts, setPosts] = useState([
        {'id': 1, 'post': 'ngntd lah hahaha..', 'donation_amount': 20000},
        {'id': 1, 'post': 'moga berkah nih bro /n lanjutkan', 'donation_amount': 2000, 'user_email': 'sulaeman@gmail.com'}
    ])

    return (
      <div className='font-mono bg-gray-100 h-screen px-4 py-8 sm:px-20 sm:py-14'>
        <div className='mb-4 sm:mb-14'>
            <h1 className='text-4xl sm:text-5xl font-bold text-gray-500'>hello,
                <span className='text-yellow-400'> bro</span>
            </h1>
        </div>
        <div className='flex flex-col sm:flex-row-reverse sm:space-x-10 sm:space-x-reverse'>
            <div className='flex sm:flex-col sm:w-1/2 mb-6 items-center sm:items-start'>
                <h1 className='text-xl sm:text-4xl font-bold text-gray-700'> 
                    <span className='text-gray-400'>Rp. </span>
                    2.200.000
                    <span className='text-gray-400 invisible sm:visible'>,00</span>
                </h1>
                <button className='bg-indigo-100 px-2 sm:px-4 py-1 sm:py-2 sm:my-4 font-bold sm:text-2xl text-indigo-500 rounded-xl'>bagi duit</button>
            </div>
            <div className='sm:w-1/2 flex flex-col overflow-y-auto h-screen space-y-2'>
                {posts ? (
                    posts.map(p => {
                        return (
                            <div className='bg-indigo-100 rounded-lg p-3 font-bold text-gray-700 text-lg shadow'>
                                <div className='text-indigo-500 text-base'>
                                    Rp. {p.donation_amount},00
                                    <span className='text-gray-700'> dari {p.user_email? p.user_email : 'anonymous'}</span>
                                </div>
                                <div>{p.post}</div>
                            </div>
                        )
                    })
                ) : (
                    <div>loading...</div>
                )}
            </div>
        </div>
      </div>
    )
  }
  