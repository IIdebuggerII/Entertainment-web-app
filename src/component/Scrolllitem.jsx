import React from 'react'

export default function Scrolllitem() {
  return (
    <div className='min-w-[300px] border mr-4 relative' >
        <img className='w-full ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqO2lgR5vlT0YIsnkHTynIJkTfU4FoegKiwRA0hexJ&s" alt="" />
        <span className='absolute top-2 right-1 z-10 bg-darkblue opacity-60 p-1 rounded-full'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>
        </span>
        <div className='w-1/3 absolute bottom-2 left-4 flex flex-col'>
            <div className='flex flex-row items-baseline'>
                <p className='opacity-40 text-xs'>2019 </p>.
                <p className='opacity-40 text-xs'>Movie </p>.
                <p className='opacity-40 text-xs'> PG</p>
            </div>
            <div>
                <p>dsadsd</p>
            </div>
        </div>
    </div>
  )
}
