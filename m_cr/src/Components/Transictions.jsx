import React from 'react'
import Dashbord from './Dashbord'
import Header from './Header'
import './style.css'
import One from './transactions/One'

const Transictions = () => {
  return (
    <div className='wallet w-full h-screen flex gap-9' >
      <Dashbord />
      <div className='flex flex-col gap-6 w-full'>
        <Header />
        <div className='w-[99%] h-1 bg-[#2D317A]' />
        <div className='flex flex-col p-9  gap-5'>
          <div className='flex flex-col  gap-7'>
            <div className='flex w-full justify-between items-center'>
              <span className='text-white text-sm	'>Transictions</span>
              <button className='text-white w-[140px] h=[42px]  rounded-lg  bg-[#3887FE]'>Export History</button>
            </div>
            <div className='flex items-center justify-between '>
              <div className='flex gap-3 text-white' >
                <span>Total</span>
                <span>1,543</span>
              </div>
              <div className=' flex  gap-5'>
                <button className=' buttom_mm text-white bg-[#32395E]'>All</button>
                <button className='bg-[none] text-[#616A8B]'>Send</button>
                <button className='bg-[none] text-[#616A8B]'>Recent</button>
              </div>
            </div>
          </div>
          <One />
          <One />
          <One />
          <One />
          <One />
          <One />
          <One />
        </div>
      </div>
    </div>
  )
}

export default Transictions