import {useState} from 'react'


export default function Donate() {
  const [auth, setAuth] = useState({'id': 1, 'user_email':'sulaeman@gmuil.com'})
  
  const onClick = () => {
    setAuth()
  }

  return (
      <div className='font-mono bg-gray-300 h-screen flex flex-col'>
        <div className='w-64 bg-gray-100 mx-auto my-auto rounded-xl px-3 py-4 flex flex-col'>
          <div className='font-bold text-lg text-gray-700'>pesen2nya, <span className='text-yellow-400'>bro</span>:</div>
          <textarea className='w-full rounded-md p-1' rows='4'
            placeholder='ngntod lo hahaha...'></textarea>
          {auth ? (<div>dari <span className='font-bold'>{auth.user_email}</span></div>):(<div></div>)}
          <div className='flex font-bold justify-between mt-6'>
            <div className='bg-indigo-100 px-5 py-1 rounded-xl text-indigo-500'>5k</div>
            <div className='bg-indigo-100 px-5 py-1 rounded-xl text-indigo-500'>10k</div>
            <div className='bg-indigo-100 px-5 py-1 rounded-xl text-indigo-500'>50k</div>
          </div>
          <div onClick={onClick} className='bg-indigo-100 font-bold text-2xl px-5 py-1 rounded-xl text-indigo-500 text-center mt-4'>kasih duit</div>
          {auth ? (
            <div className='font-bold text-md text-gray-700 mt-4 mb-4 text-center'><span className='text-yellow-400'>logout</span> biar anonymous</div>
          ) : (
            <div className='font-bold text-md text-gray-700 mt-4 mb-4 text-center'><span className='text-yellow-400'>login</span> biar ga anonymous</div>
          )}
          
        </div>
      </div>
    )
  }
  