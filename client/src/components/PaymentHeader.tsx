import Image from 'next/image'
import arrowDown from '../assets/arrow-down.svg'
import { Timer } from './Timer'

export function PaymentHeader() {
    return(
        <div className="bg-main-red px-[39px] py-[6.5px] h-auto">
           
           <div className='flex justify-between items-center m-auto max-w-[1024px] '>
            <h2
                className="text-white text-[23px] "
                >Você ganhou Frete Grátis em 12x SEM JUROS:</h2>



                <div className='flex'>

                    <Timer />

                    <button className='flex bg-main-pay justify-center shrink-0 items-center  font-bold text-white text-lg box-content	 content-center align-middle w-full rounded max-w-[209px] px-[13px] py-[8.4px]'>
                        Comprar agora
                        <Image src={arrowDown} alt="" height={15} className='ml-[5px]'/>
                    </button>

                </div>
           </div>
              
            
        </div>
    ) 
}