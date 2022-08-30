import Dashbord from './Dashbord'
import Header from './Header'
import './style.css'

const Market = () => {
  return (
    <div className='wallet w-full h-screen flex gap-9 ' >
      <Dashbord />
      <div className=' flex flex-col gap-6 w-full'>
        <Header />
        <div className=' w-[99%] h-1 ' />
        <div className='  w-full flex flex-wrap p-[30px] gap-[35]'>
        </div>
      </div>
    </div>
  )
}

export default Market