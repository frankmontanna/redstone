import { Button } from "./Button";
import ImageBanner from '../assets/hero-banner.png'
import Image from "next/image";

export function Hero() {
  return (
    <section className="flex w-full max-w-[1200px] py-[70px] m-auto items-center">
      <div className="flex flex-col gap-6 ">
        <h1 className="font-bold text-4xl text-white ">Sucesso de vendas no mundo, agora no Brasil.</h1>
        <span className="text-main-gray-text-seconday py-4">
          Prepare receitas deliciosas e saudáveis sem usar uma gota de óleo!
          Afinal do que adianta comprarmos alimentos saudáveis, sem conservantes
          e com menos sódio, se eles são preparados em uma panela cheia de óleo?
          <br/>
          <br/>
          Para resolver esse problema, chega ao Brasil a linha de panelas
          RedSilver.
          <br/>
          <br/>
          As panelas RedSilver possuem o revestimento antiaderente
          mais potente do mundo, capaz de preparar as melhores receitas sem
          grudar, mesmo após muito tempo de uso.
          <br/>
          <br/>
        Além disso, a RedSilver não
          solta substâncias tóxicas, conhecidas como PTFE e PFOA, que são
          derivadas do plástico e fazem muito mal à saúde.
        </span>
        <Button title="Quero Comprar Agora" />
      </div>

      
      <Image src={ImageBanner} alt="" className="flex box-border w-full max-w-[731px] h-full  mr-[-38px]" quality={100} />
       
        
       
       
    </section>
  );
}
