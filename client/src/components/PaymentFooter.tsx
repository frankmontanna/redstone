import Image from "next/image"
import convertLogo from '../assets/logo-convvert.png'

export function PaymentFooter() { 
    return(

        <div
         className="text-[#74788d] flex flex-col items-center text-sm py-10  "
        >
            <span className="bold">Política de privacidade | Termos de compra</span>
            <span>Esta compra será processada por:
</span>
            <Image src={convertLogo} alt='' width={125}/>
            
        </div>
    )
}