import React from "react"

export default function Scrolllitem() {
  return (

    <div className='min-w-[300px]  mr-4 relative ' >
        
        <img className='w-full rounded-lg my-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ntKRpMo5rNFiNBlvTTdneUlcJmqLd-R79Q&usqp=CAU" alt="" />
        <a href="">
        <span className='absolute top-4 right-1 z-10 bg-darkblue bg-opacity-60 p-1 rounded-full'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>
            
        </span>
        </a>
        <div className='w-1/3 absolute bottom-2 left-4 flex flex-col'>
            <div className='flex flex-row items-center '>
                <p className='opacity-60 '>2019 </p> 
                <span className='opacity-60 text-xl scale-150 mx-2 relative -top-2'> .</span>
                <p className='opacity-60  flex flex-row'> <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5A.375.375 0 003 5.625zm16.125-.375a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0021 7.125v-1.5a.375.375 0 00-.375-.375h-1.5zM21 9.375A.375.375 0 0020.625 9h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zM4.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5zM3.375 15h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h1.5a.375.375 0 00.375-.375v-1.5A.375.375 0 004.875 9h-1.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375zm4.125 0a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z" clipRule="evenodd" />
                </svg>
                Movie 
                </p>
            </div>
            <div>
                <p className='text-lg '>Barbi</p>
            </div>
        </div>
        
        <span className='absolute bg-opacity-5 rounded-full px-3 bg-white right-5 bottom-6'> PG</span>


    <div className="min-w-[300px]  mr-4 relative  ">
      <img
        className="w-full rounded-lg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqO2lgR5vlT0YIsnkHTynIJkTfU4FoegKiwRA0hexJ&s"
        alt=""
      />
      <span className="absolute top-2 right-1 z-10 bg-darkblue opacity-60 p-3 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
          />
        </svg>
      </span>
      <div className="w-1/3 absolute bottom-2 left-4 flex flex-col">
        <div className="flex flex-row items-baseline">
          <p className="opacity-40 text-xs">2019 </p>.
          <p className="opacity-40 text-xs">Movie </p>.
          <p className="opacity-40 text-xs"> PG</p>
        </div>
        <div>
          <p>dsadsd</p>
        </div>
      </div>
      </div>

    </div>
  );
}
