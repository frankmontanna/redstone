import Image, { StaticImageData } from "next/image";
import { Button } from "../Button";

interface AdvantagesCardRightProps { 
    title: string,
    desc: string,
    image: StaticImageData,
}
interface AdvantagesCardLeftProps { 
    title: string,
    desc: string,
    image: StaticImageData,
}

export function AdvantagesCardLeft(props: AdvantagesCardLeftProps) { 
    return(
        <div className="flex py-10 gap-8 text-main-gray-main ">
            <div className="flex flex-col text-right gap-6">
                <span className="text-3xl font-bold ">{props.title}</span>
                <span>{props.desc}</span>
                <Button title="Conheça os Kits" />
            </div>
            <Image src={props.image} alt="" className="rounded"/>
        </div>
    )
}


export function AdvantagesCardRight(props: AdvantagesCardRightProps) { 
    return(
        <div className="flex py-10 gap-8 text-main-gray-main ">
            <Image src={props.image} alt="" className="rounded"/>
            <div className="flex flex-col text-left gap-6">
                <span className="text-3xl font-bold ">{props.title}</span>
                <span>{props.desc}</span>
                <Button title="Conheça os Kits" />
            </div>
        </div>
    )
}