import ser from '../assets/Overiew/Vector (3).png'
import masse from '../assets/Overiew/Group 3.png'
import bud from '../assets/Overiew/Group (6).png'


const Header = () => {
    return (
        <div className='  p-8 w-full h-[65px]'>
            <div className=' w-full h-[32px] flex  items-center justify-between'>
                <div className='flex relative'>
                    <input className=' text-white w-[300px] h-[32px] rounded-lg  border-inherit  bg-[#161245] ' />
                    <img  src={ser} className=' w-[17px] h-[17px] absolute right-[19px] top-[9px] z-50' />
                </div>
                <div className=' w-[120px] h-[32px] flex items-center  gap-12  overflow-hidden'>
                    <img src={masse} />
                    <img src={bud} className=' w-[31px] h-[60px]  mr-3  object-cover ' />
                </div>
            </div>
        </div>
    )
}

export default Header