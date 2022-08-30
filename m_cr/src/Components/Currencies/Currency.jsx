import lgbtc from '../../assets/Overiew/Group 6 (3).png'
import efr from '../../assets/Overiew/Vector (5).png'
import logo from '../../assets/Overiew/Group 4.png'
import logo1 from '../../assets/Overiew/Group 3 (1).png'
import arrow from '../../assets/Arrow.png'


const Currencyin = (props) => {

    return (
        <div className='flex flex-col gap-7 items-center'>
            <div className='flex gap-6' >
                <div className=' flex w-[730px] bg-[#160D3E] h-[250px] rounded-sm p-8 flex-col gap-4'>
                    <div className='flex justify-between'>
                        <select defaultValue={props.currency1} onChange={(e) => props.onChangeCurrency(e.target.value)} style={{ width: '100px', height: '33px', background: 'none', color: 'white' }}>
                            {props.arr.map((item, index) => <option style={{ color: 'black' }} value={item} key={index}>{item}</option>)}
                        </select>
                        <img src={lgbtc} />
                    </div>
                    <input className=' m-auto w-full  h-[46px] bg-[#32395E] rounded-sm text-white'  value={props.amount} onChange={(e) => props.onChangeAmount(e.target.value)} />
                </div>
                <div className='w-[730px] bg-[#160D3E] h-[250px] rounded-sm p-8 flex flex-col gap-4' >
                    <div className='flex justify-between h-[110px]'>
                        <select defaultValue={props.currency2} onChange={(e) => props.onChangeCurrency2(e.target.value)} style={{ width: '100px', height: '33px', background: 'none', color: 'white' }}>
                            {props.arr.map((item, index) => <option style={{ color: 'black' }} value={item} key={index}>{item}</option>)}
                        </select>
                        <img className=' object-contain' src={efr} />
                    </div>
                    <input className=' m-auto w-full  h-[46px] bg-[#32395E] rounded-sm text-white' value={props.amount2} onChange={(e) => props.onChangeAmount2(e.target.value)} />
                </div>

            </div>
            <div className='w-[1500px] h-[130px] bg-[#160D3E]  rounded-sm flex items-center justify-center gap-9'>
                <div className=' flex gap-5 text-white items-center'>
                    <span>0.45234 BTC</span>
                    <img src={logo} />
                </div>
                <img src={arrow} />
                <div className=' flex gap-5 text-white items-center'>
                    <img src={logo1} />
                    <span>1.45534 gRC</span>
                </div>
            </div>
            <button className='w-[140px]  h-[42px] bg-[#1288E8] text-white text-lg '>Exchange</button>
        </div>
    )
}

export default Currencyin