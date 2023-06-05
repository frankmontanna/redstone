
import Image from "next/image"
import kitBanner1 from "../assets/banner-kit-1.png"
import { PaymentHeader } from "@/components/PaymentHeader"
import { PayDataForm } from "@/components/PayDataForm";
import { PayCard } from "@/components/PayCard";
import { PaymentFooter } from "@/components/PaymentFooter";

export default function Payment() { 
    return(
        <div
            className="box-border"
        >
            <PaymentHeader />

            <div className="w-full max-w-[1380px] m-auto">
            <Image src={kitBanner1} className="m-auto w-full " alt="" />

            
           <div
            className="flex justify-center gap-5 my-[30px]"
           >
           <PayDataForm />
            <PayCard />
           </div>

           <PaymentFooter />

            </div>

        </div>
    )
}