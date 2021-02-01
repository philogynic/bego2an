import Link from 'next/link'



export default function Login() {

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
          
          <div className='font-bold text-lg text-gray-700'>login, <span className='text-yellow-400'>bro</span>:</div>
          <input className='w-full rounded-md p-1 mt-2'
              placeholder='sayurtahu@gmuil.com'></input>
          <input className='w-full rounded-md p-1 mt-2'
              type='password'
              placeholder='***********'></input>
          
          <div className='bg-indigo-100 font-bold text-2xl px-5 py-1 rounded-xl text-indigo-500 text-center mt-4'>login</div>

          <div className='font-bold text-md text-gray-700 mt-6 mb-4 text-center leading-none'><Link href='signup'><a className='text-yellow-400 underline'>daftar</a></Link> 
              <span> </span> kalo belom pernah daftar atau <span className='text-pink-400 underline'>login pake google</span>
          </div>

        </div>
      </div>
    )
  }
  