import cardIco from "../assets/card-ico.svg";
import boletoIco from "../assets/boleto-ico.svg";
import pixIco from "../assets/pix-ico.svg";
import { IconPayMethods } from "./IconPayMethods";



export function PaymentMethod() { 
    return (
        <div className="flex gap-6 mb-6 border-b border-dashed border-r-main-acordion-gray  py-6 m-auto">
         <IconPayMethods
            title="Cartão de crédito"
            icon={cardIco}
         />
         <IconPayMethods
            title="Boleto"
            icon={boletoIco}
         />
         <IconPayMethods
            icon={pixIco}
         /> 
         
        </div>  
    ) 
}