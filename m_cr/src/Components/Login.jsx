import { Link } from 'react-router-dom'
import bg from '../../src/assets/Bg.png'
import './style.css'
import kty from '../assets/Group 6.png'
import user from '../assets/Group 2 (1).png'
import hide from '../assets/Vector (1).png'
import left from '../assets/Group 8.png'
import ab from '../assets/Polygon 2.png'
import el from '../assets/Rectangle 8.png'



const Login = () => {


  return (
    <div className=' w-full h-screen bg-[#110929] flex items-center  justify-center'>
      <div className=' bg_size flex justify-around	 z-[1111] p-[70px] bg-no-repeat w-[1366px] h-[768px]  rounded-xl bg-center '>
        <div className='top_header_block z[12112]  relative w-[480px] h-[595px] p-[50px] flex items-center text-white flex-col gap-[62px]'>
          <h1 className='h1'>Welcome!</h1>
          <div className=' flex flex-col  gap-6'>
            <input className='input pl-11  bg-[#2E3558] border-inherit w-[375px] h-[50px]' placeholder='E-mail or Login'  />
            <input className='input pl-11  bg-[#2E3558] border-inherit w-[375px] h-[50px]' type='password' defaultValue='12345'  />
            <img src={kty} className='  object-cover w-[35px] bottom-[307px] left-[57px] h-[35px] absolute z-[2222]' />
            <img src={user} className=' top-[177px]  object-cover w-[30px] bottom-[307px] left-[57px] h-[30px] absolute z-[2222]' />
            <img src={hide} className=' top-[249px] left-[383px]  object-cover w-[30px]  bottom-[307px]  h-[30px] absolute z-[2222]' />
            <img src={ab} className=' w-[67px] h-[67px] absolute left-[-29px] top-[90px]' />
            <img src={el} className='w-[60px] h-[60px] absolute z-[10] right-[-36px] top-[4px]' />
            <div className=' flex gap-[30px] items-center   justify-center  mt-10'>
              <Link to={'/Overview'}>
              <button className='bg-[#242845] w-[110px] h-[42px]'>SIGN UP</button>
              </Link>
              <button className=' bg-[#3BA0FF] w-[110px] h-[42px]'>SIGN IN</button>
            </div>
            <div className=' mt-[80px] text-center text-[#5FB2FF]'>
            <span className='pon'>Forgot your password?</span>
            </div>
          </div>
        </div>
        <div className='w-[480px] h=-[595px] rounded-lg flex items-center  justify-center'>
          <img src={left} />  
        </div>
      </div>
    </div>
  )
}

export default Login