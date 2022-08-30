import Dashbord from './Dashbord'
import Header from './Header'
import './style.css'
import Dougnout from './Chart/Dougnout.jsx'

const Wallets = ({ arr }) => {


  return (
    <div className='wallet w-full h-screen flex gap-6' >
      <Dashbord />
      <div className='flex flex-col gap-6 w-full'>
        <Header />
        <div className='w-[98%] h-1 bg-[#2D317A]' />
        <div className=' flex flex-col gap-11  p-8'>
          <div className='flex flex-col gap-6' >
            <span className='text-white text-xl'>Wallets</span>
            <div className='flex gap-4'>
              <div className='w-[370px] h-[200px]  rounded-md bg-[#160D3E] flex gap-6 items-center'>
                <div className='w[30px] h-[130px]'>
                  <Dougnout arr={[90, 30, 130]} />
                </div>
                <div className='flex flex-col gap-4 text-white'>
                  <div className=' flex gap-5' >
                    <span>Ethereum</span>
                    <span>90 %</span>
                  </div>
                  <div className=' flex gap-5'>
                    <span>Bitcoin</span>
                    <span>30 %</span>
                  </div>
                  <div className=' flex gap-5'>
                    <span>Dash</span>
                    <span>120 %</span>
                  </div>
                </div>
              </div>
              <div className=' w-[370px] h-[200px] rounded-xl  bg-white'>

              </div>
              <div className=' w-[370px] h-[200px] rounded-xl  bg-white'>

              </div>
              <div className=' w-[370px] h-[200px] rounded-xl  bg-white'>

              </div>
            </div>
          </div>
          <div className='flex gap-8 mt-28'>
            <div className=' w-[751px] h-[320px] bg-white rounded'>

            </div>
            <div  className=' w-[751px] h-[320px] bg-white rounded'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wallets