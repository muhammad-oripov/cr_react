import './style.css';
import Dashbord from './Dashbord'
import Header from './Header';
import Btc from '../assets/Group 13.png'
import Gr from '../assets/Group 14.png'
import ef from '../assets/Group 13 (1).png'
import aet from '../assets/Group 15.png'
import Dougnout from '../Components/Chart/Dougnout'
import Linechart from '../Components/Chart/Linechart'
import Linespending from '../Components/Chart/Linespending'


const Overview = ({ arr }) => {

  return (
    <div className='Main'>
      <Dashbord />
      <div className='w-full h-screen flex flex-col gap-6'>
        <Header />
        <div className='w-[99%] h-1 bg-[#2D317A]' />
        <div className=' flex flex-col gap-6 p-7 overflow-hidden'>
          <div className='w-full flex justify-between'>
            <div className='flex gap-10 items-center'>
              <span className='text-white text-lg'>Overview</span>
              <span className=' text-[#54669C] text-sm'>25 october, Sunday</span>
            </div>
            <button className='bg-[#3887FE]  rounded-3xl w-[135px] h-8 text-white '>Add widget</button>
          </div>
          <div className='flex gap-4 items-center   mt-3 w-full'>
            <div className='flex  gap-6 w-1/2'>
              <div className=' w-[320px] p-6 h-[362px]  bg-[#160D40]  rounded-lg flex flex-col items-center'>
                <div className='w-[200px]  h-36 z-20 relative p-4'>
                  <span className=' mr-4 text-white font-semibold'>Balance</span>
                  <Dougnout arr={[120, 20, 60]} />
                  <div className='flex justify-between text-white mt-4'>
                    <div>
                      <span>Ethereum</span> <br />
                      <span>Bitcoin</span> <br />
                      <span>Dash</span> <br />
                    </div>

                    <div>
                      <span>{arr[0]} %</span> <br />
                      <span>{arr[1]} %</span> <br />
                      <span>{arr[2]} %</span> <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-[320px]  h-[362px] flex flex-col bg-[#160D40] items-center p-10 rounded-md'>
                <div className='flex flex-col gap-8 w-[95%] mb-2'>
                  <div className='flex justify-between'>
                    <span className='text-white'>Spending</span>
                    <select style={{ background: 'none', color: 'white' }}>
                      <option style={{ color: 'black' }}>January</option>
                      <option style={{ color: 'black' }}>February</option>
                      <option style={{ color: 'black' }}>July</option>
                    </select>
                  </div>
                  <div className='flex gap-2 flex-col text-white'>
                    <span className=' text-xl font-semibold'>$ 5,743.35</span>
                    <span className=' text-[#54669C]'>total spending</span>
                  </div>
                </div>
                <div className=' w-[300px] h-48 rounded-md  '>
                  <Linespending arr={[665, 459, 580, 381, 566, 400, 450, 700]} />
                </div>
              </div>
            </div>
            <div className='flex flex-wrap gap-6  max-w-[50%]  min-w-[50%] items-end'>
              <div className=' w-[350px]  h-[178px]  rounded-md overflow-hidden bg-white'>
              </div>
              <div className=' w-[350px]  h-[178px]  rounded-md overflow-hidden bg-white'>
              </div>
              <div className=' w-[350px]  h-[178px]  rounded-md overflow-hidden bg-white'>
              </div>
              <div className=' w-[350px]  h-[178px]  rounded-md overflow-hidden bg-white'>
              </div>
            </div>
          </div>

          <div className=' w-full flex gap-5 h-[300px]'>
            <div className=' w-[931px] bg-[#120C3C] rounded-md h-[300px] p-4'>
              <div className='flex justify-between items-center'>
                <div  className=' flex gap-6'>
                  <span className=' text-white font-semibold text-xl '>Market</span>
                  <select style={{ background: 'none', color: '#54669C', display: 'flex', fontSize: '18px' }}>
                    <option style={{ color: 'black' }}>Bitcoin</option>
                    <option style={{ color: 'black' }}>Ethereum</option>
                    <option style={{ color: 'black' }}>Dash</option>
                  </select>
                </div>
                <select style={{ background: 'none', color: '#54669C', display: 'flex', fontSize: '16px' }}>
                  <option style={{ color: 'black' }}>November</option>
                  <option style={{ color: 'black' }}>February</option>
                  <option style={{ color: 'black' }}>summer</option>
                </select>
              </div>
              <div className=' w-full h-[150px]'>
                <Linechart arr={[65, 59, 80, 81, 56, 55, 40]} w={'869.222px'} h={'276px'} />
              </div>
            </div>
            <div className=' w-[553px]  rounded-md p-4 flex flex-col gap-4'>
              <div className='w-full flex flex-col gap-3'>
                <span className=' text-white text-lg '>Recent News</span>
                <div className=' w-full h-[1px] bg-[#2D317A] font-semibold' />
              </div>
              <div className='flex flex-col gap-6 items-center'>
                <div className='flex gap-6 items-center w-full  h-8'>
                  <span className='text-[#54669C]  w-24'>19 hours ago </span>
                  <span className='text-white'>SEC Fails to Show Court Blockvest Tokens Are Securities</span>
                </div>
                <div className='flex gap-6 items-center w-full h-8'>
                  <span className='text-[#54669C] w-40'>23 hours ago</span>
                  <span className='text-white'>Report: Bitcoin Mining Doesn’t Fuel Climate Change, It Benefits the Global Economy</span>
                </div>
                <div className='flex gap-11 items-center w-full h-8'>
                  <span className='text-[#54669C] w-24'>11.22  15:27</span>
                  <span className='text-white'>A Look at the Multi-Currency Encrypted Messaging App ‘Chat.Chat’</span>
                </div>
                <div className='flex gap-9 items-center w-full h-8'>
                  <span className='text-[#54669C]' w='100px'>11.21  11:43</span>
                  <span className='text-white'>Four Ways To Comememorate Bitcoin's 10th Anniversary</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview