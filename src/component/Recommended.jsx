import React from 'react'
import RecommendItems from './RecommendItems'
export default function Recommended() {
  return (<>
    <div>
        <p className='text-2xl mt-6'>Recommended for you</p>
        <div className='grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-row grid mt-10 gap-7'>
            <div className=''><RecommendItems/></div>
            <div className=''><RecommendItems/></div>
            <div className=''><RecommendItems/></div>
            <div className=''><RecommendItems/></div>
            <div className=''><RecommendItems/></div>
            <div className=''><RecommendItems/></div>
            <div className=''><RecommendItems/></div>
            <div className=''><RecommendItems/></div>
        </div>
    </div>
    </>
  )
}
