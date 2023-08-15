import React from 'react'
import RecommendItems from './RecommendItems'
export default function Recommended() {
  return (<>
    <div>
        <p className='text-2xl mt-6'>Recommended for you</p>
        <div className='grid-cols-2 grid-row grid mt-10 gap-x-7'>
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
