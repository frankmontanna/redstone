import Image from 'next/image'
import redStoneLogo from '../assets/redstone-logo.svg'
import { GetStaticProps } from 'next';
import { Card, CardProps } from '../components/Card';
import { AccordionBar } from '@/components/Accordion';
import { Hero } from '@/components/Hero';
import { Celeb } from '@/components/CelebsContainer/Celeb';
import { Advantege } from '@/components/AdvantageContainer/Advantege';




interface HomePageProps {
  products: CardProps[];
}



export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://127.0.0.1:8080/products');
  const data = await response.json();

  return {
    props: {
      products: data.results,
    },
  };
};

export default function Home({ products }: HomePageProps) {
 

  return (
        <div>
          
          <div>
            <Image
              className="py-7 block m-auto "
              src={redStoneLogo} alt="Logo Redstone" />

            <div
            className='bg-main-gray-light py-7 '>
              
              <h2
              className='text-4xl text-center	 text-main-gray-text font-bold ' 
              >VOCÊ GANHOU ATÉ 45% DE <span className='text-main-red'>DESCONTO!</span></h2>
            </div>
          </div>

          <div
          className='bg-app bg-cover bg-no-repeat'
          >

          <Celeb />  
          <Hero />
          <Advantege />

          
          <div
            className='text-center pt-20'
          >
          <h1
            className='text-4xl text-main-red '
          >Escolha seu kit abaixo:</h1>
          <h2
            className='text-2xl	text-main-gray-text-seconday mt-'
          >Oportunidade única!</h2>
          </div>

          <div
          className='flex flex-wrap gap-7 w-full max-w-[1300px] justify-center m-auto mt-[50px]'
          >
              {products.map((product) => (
                 <Card
                 key={product.ID} {...product} />
                ))} 

          </div>


          <AccordionBar/>

          </div>
          
        </div>
    )

    
}
 
