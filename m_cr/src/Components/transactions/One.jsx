import '../style.css'
import btcimg from '../../assets/Overiew/Vector (4).png'
import left from '../../assets/Overiew/Group 13.2.png'


const One = () => {
    return (
        <div className='trn w-full h-16 flex p-6 items-center justify-between rounded-lg'>
            <div className=' flex gap-8 text-white   text-sm font-semibold'>
                <span>AM 01:16</span>
                <span>24 dec 2018</span>
                <div className=' bla  w-[32px] h-[32px] flex items-center justify-center rounded-full'>
                    <img className='object-contain' src={btcimg} />
                </div>
            </div>
            <div className='flex gap-6 items-center'>
                <img className='h-[21px]' src={left}  />
                <span className='text-white'>74EKRJMXkhKDR5dj34578fgirwE22sfg</span>
            </div>
            <div className=' flex gap-8 items-center'>
                <span className='text-xs text-white'>0.0085 BTC</span>
                <button className='bg-[#32395E]  w-[90px] h-[30px] rounded-sm text-white' >Waiting</button>
            </div>
        </div>
    )
}

export default One