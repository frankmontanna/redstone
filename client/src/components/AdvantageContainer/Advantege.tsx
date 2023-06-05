import {AdvantagesCardLeft, AdvantagesCardRight} from "./AdvantagesCards";
import Slide1 from '../../assets/n-gruda-s1.jpg'


export function Advantege() { 
    return(
        <div className="bg-grayapp w-full py-16 bg-cover ">
            <div className="max-w-[1200px] flex flex-col items-center justify-center m-auto">
                <span className="text-main-gray-text font-bold text-4xl">Benefios das panelas <span className="text-main-red">RedSilver</span></span>
               <div>

                    <AdvantagesCardLeft
                    title="Não Gruda (Mesmo após muito uso)"
                    desc='Através da tecnologia antiaderente exclusiva RS Non-Stick de 3 camadas, a RedSilver é capaz de preparar os alimentos sem grudar e sem usar óleo, mesmo após muito tempo de uso.'
                    image={Slide1}
                    />
                    <AdvantagesCardRight
                    title="Não Gruda (Mesmo após muito uso)"
                    desc='Através da tecnologia antiaderente exclusiva RS Non-Stick de 3 camadas, a RedSilver é capaz de preparar os alimentos sem grudar e sem usar óleo, mesmo após muito tempo de uso.'
                    image={Slide1}
                    />
                    <AdvantagesCardLeft
                    title="Não Gruda (Mesmo após muito uso)"
                    desc='Através da tecnologia antiaderente exclusiva RS Non-Stick de 3 camadas, a RedSilver é capaz de preparar os alimentos sem grudar e sem usar óleo, mesmo após muito tempo de uso.'
                    image={Slide1}
                    />
                     <AdvantagesCardRight
                    title="Não Gruda (Mesmo após muito uso)"
                    desc='Através da tecnologia antiaderente exclusiva RS Non-Stick de 3 camadas, a RedSilver é capaz de preparar os alimentos sem grudar e sem usar óleo, mesmo após muito tempo de uso.'
                    image={Slide1}
                    />


               </div>


            </div>
        
        </div>
    )
}