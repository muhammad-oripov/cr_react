import { Link as Side } from 'react-router-dom'
import './style.css'
import logo from '../assets/valuet.png'
import overview from '../assets/ovevier.png'
import wallets from '../assets/wallet.png'
import Exchange from '../assets/tranacton.png'
import Transictions from '../assets/trans.png'
import market from '../assets/market.png'
import log_out from '../assets/Group (5).png'
import elisp from '../assets/Ellipse (3).png'
import Poly from '../assets/Polygon.png'


const Dashbord = () => {
    return (
        <div className='bar w-[320px]  h-[100vh] p-12 flex  items-center  flex-col  justify-between'>
            <div className='flex flex-col gap-6 items-center'>
                <div>
                    <img className='w-[120px] h-[50px] object-cover' src={logo} />
                    <div className= 'w-[120px] h-[2px]  bg-[#1288E8]  relative bottom-3'/>
                </div>
                <div className=' flex  flex-col gap-4'>
                    <div className= 'w-[200px] h-[50px] bg-[#32395E] flex items-center p-6 rounded-md cursor-pointer'>
                        <Side to='/overview' style={{ display: 'flex', gap: '15px', color: 'white', alignItems: 'center' }}>
                            <img className=' w-[16px] h-[16px]'src={overview} />
                            <span>Overview</span>
                        </Side>
                    </div>

                    <div className=' w-[200px] h-[50px] flex items-center p-8 cursor-pointer'>
                        <Side to='/wallets' style={{ display: 'flex', gap: '16px', color: '#616A8B', alignItems: 'center' }}>
                            <img src={wallets} />
                            <span>Wallets</span>
                        </Side>
                    </div>

                    <div className='w-[200px] h-[50px] flex items-center p-8 cursor-pointer'>
                        <Side to='/transictions' style={{ display: 'flex', gap: '16px', color: '#616A8B', alignItems: 'center' }}>
                            <img src={Transictions} />
                            <span>Transictions</span>
                        </Side>
                    </div>

                    <img  src={Poly} className= 'w-[65px] h-[65px] top-[514px]  right-[-24px] absolute  ' />

                    <div className=' w-[200px] h-[50px] flex items-center p-8 cursor-pointer'>
                        <Side to='/exchange' style={{ display: 'flex', gap: '16px', color: '#616A8B', alignItems: 'center' }}>
                            <img src={Exchange} />
                            <span>Exchange</span>
                        </Side>
                    </div>

                    <div className= 'w-[200px] h-[50px] flex items-center p-8 cursor-pointer'>
                        <Side to='/market' style={{ display: 'flex', gap: '16px', color: '#616A8B', alignItems: 'center' }}>
                            <img src={market} />
                            <span>market</span>
                        </Side>
                    </div>

                </div>
            </div>


            <div className=' flex flex-col   items-start gap-8'>
                <div className=' w-[180px] h-[2px] bg-[#018FFF]' />
                <div className=' flex  flex-col  gap-6'>
                    <div className=' text-[#616A8B] flex gap-8 items-center cursor-pointer'>
                        <img src={elisp} />
                        <span>Mike Jakson</span>
                    </div>
                    <Side to='/Login' style={{display: 'flex', gap: '17px', alignItems: 'center', color: '#616A8B', cursor: 'pointer'}}>
                        <img src={log_out} />
                        <span>Log out</span>
                    </Side>
                </div>
            </div>
        </div>
    )
}

export default Dashbord