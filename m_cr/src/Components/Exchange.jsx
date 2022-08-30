import React, { useState, useEffect } from 'react'
import Dashbord from './Dashbord'
import Header from './Header'
import './style.css'
import Currencyin from './Currencies/Currency'
import axios from 'axios'

const Exchange = () => {
  let [currency1, setCurrency1] = useState('USD')
  let [currency2, setCurrency2] = useState('UZS')
  let [amount1, setAmount1] = useState()
  let [amount2, setAmount2] = useState()
  let [arr, setarr] = useState([])

  useEffect(() => {
    axios.get('https://cdn.cur.su/api/latest.json')
      .then(res => {
        if (res.status === 200 || res.status === 201) {
          setarr(res.data.rates)
        }
      })
  }, [])



  function handleChangeAmount1(amount1) {
    setAmount2(amount1 * arr[currency2] / arr[currency1]);
    setAmount1(amount1);
  }
  function handleChangeCurrency1(currency1) {
    setAmount2(amount1 * arr[currency2] / arr[currency1]);
    setCurrency1(currency1);
  }

  function handleChangeAmount2(amount2) {
    setAmount1(amount2 * arr[currency1] / arr[currency2]);
    setAmount2(amount2);
  }
  function handleChangeCurrency2(currency2) {
    setAmount2(amount2 * arr[currency1] / arr[currency2]);
    setCurrency2(currency2);
  }

  return (
    <div className='wallet w-full h-screen flex gap-8 ' >
      <Dashbord />
      <div className=' flex flex-col  w-full gap-6'>
        <Header />
        <div className=' w-[97%] h-1  bg-[#2D317A]' />
        <div className=' w-full flex flex-col gap-6  p-8'>
          <div className=' flex flex-col text-white gap-4'>
            <span className=' text-lg	 font-bold'>Exchange</span>
            <div className=' flex  items-center text-[#616A8B] w-[550px]  justify-between text-base	'>
              <span>From</span>
              <span>To</span>
            </div>
          </div>
          <Currencyin
            onChangeAmount={handleChangeAmount1}
            onChangeAmount2={handleChangeAmount2}
            onChangeCurrency={handleChangeCurrency1}
            onChangeCurrency2={handleChangeCurrency2}
            amount={amount1}
            amount2={amount2}
            currency1={currency1}
            currency2={currency2}
            arr={Object.keys(arr)}
          />
        </div>
      </div>
    </div>
  )
}

export default Exchange