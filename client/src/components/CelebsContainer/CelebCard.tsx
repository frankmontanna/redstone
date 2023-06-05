import Image from "next/image"
import ImageCele1 from '../../assets/jujured.jpg'
import ImageCele2 from '../../assets/vivi.jpg'
import ImageCele3 from '../../assets/gazetamulheres.jpg'
import { Button } from "../Button"



export function CelebCard() { 
    return(
        <div className="flex flex-col justify-center items-center">
           
            <div className="flex gap-4 mb-10">
                <div className="w-[261px]  rounded overflow-hidden ">
                <Image src={ImageCele1} alt="" width={261} />
                    <div className="bg-main-red p-[17px] text-white flex flex-col text-center justify-center font-bold ">
                        <h2 className="text-[22px]">Juju Salimeni</h2>
                        <span className="text-sm">@jujusalimeni</span>
                    </div>
            </div>

            <div className="w-full max-w-[261px] rounded overflow-hidden">
                <Image src={ImageCele2} alt="" />
                    <div className="bg-main-red p-[17px] text-white flex flex-col text-center justify-center font-bold ">
                        <h2 className="text-[22px]">Viviane Araujo</h2>
                        <span className="text-sm">@araujovivianne</span>
                    </div>
            </div>

            <div className="w-full max-w-[261px] rounded overflow-hidden">
                <Image src={ImageCele3} alt="" />
                    <div className="bg-main-red p-[17px] text-white flex flex-col text-center justify-center font-bold ">
                        <h2 className="text-[22px]">TV Gazeta</h2>
                        <span className="text-sm">@gazetamulheres</span>
                    </div>
            </div>
            </div>

           <Button title="Quero Comprar Agora" />

        </div>
    )
}