import Image from 'next/image'
import cardsImage from '../assets/cards.png'
import shippigImage from '../assets/free-shipping.png'
import { useRouter } from 'next/router';
import { formatPrice } from '@/utils/formatPrice';



export interface CardProps {
    ID: number;
    DISCOUNT: boolean;
    DISCOUNT_VALUE: number;
    BEST_SELLER: boolean;
    TITLE: string;
    TAGS: string[];
    IMAGE: string;
    FULL_PRICE: number;
    CURRENT_PRICE: number;
  }
  

export function Card(props: CardProps) {
    const router = useRouter();

    const fullPrice = props.FULL_PRICE;
    const currentPrice = props.CURRENT_PRICE;

    const installmentPrice = currentPrice / 12;

    const formattedFullPrice = formatPrice(fullPrice);
    const formattedCurrentPrice = formatPrice(currentPrice);
    const formattedInstallmentPrice = formatPrice(installmentPrice);
  


    const handleBuyNow = () => {
        router.push({
          pathname: '/payment',
          query: {
            id: props.ID,
            title: props.TITLE,
            fullPrice: props.FULL_PRICE,
            currentPrice: props.CURRENT_PRICE,
          },
        });
      };
   
    return (
       
       
       <div 
       className="bg-white inline-block rounded-lg overflow-hidden "
       >

        <div>
        {props.BEST_SELLER && (
            <div className="h-10 w-full bg-main-red flex uppercase">
            <h2 className="text-white text-lg m-auto text-center">Mais vendidos</h2>
            </div>
        )}
        
        </div>
        


        <div className='px-4'>
            <div
                className="flex flex-col w-80 text-center"
                
            >
            <h1
                className="text-2xl text-main-gray-text font-bold mt-7"
            >{props.TITLE}</h1>

            <div 
                className="flex flex-wrap gap-1 justify-center mt-3 uppercase "
            >
                    {props.TAGS.map((tag, index) => (
                    <span 
                    className='text-[10px] text-main-green font-bold py-1 px-4 border-[1px] border-main-green rounded-full'
                    key={index}>{tag}</span>
                    ))}
                    
                </div>  
                        
                <img 
                    className='m-auto mt-4'
                    src={props.IMAGE} alt="" />  

                <span
                className='text-sm text-main-gray-text mt-4 '
                >de <span className='line-through'>R$ {formattedFullPrice} </span> por</span>
                <div 
                className='flex items-end gap-3 justify-center '
                >
                    <span
                    className='text-sm text-main-gray-text '
                    >12x de
                    </span>

                    <h2
                    className='text-4xl font-bold  '
                    >R$ {formattedInstallmentPrice}
                    </h2>

                </div>

                <span
                className='text-sm text-main-gray-text '
                >ou R$ {formattedCurrentPrice} à vista
                </span>

                <button
                className='bg-main-green text-lg text-bold text-white py-4 rounded my-4'
                onClick={handleBuyNow}

                >Comprar Agora</button>

                <Image 
                className='mb-4 m-auto'
                src={cardsImage} alt="" />
                <Image 
                className='mb-4  m-auto'
                src={shippigImage} alt="" />

                <span
                    className='text-main-gray-text text-sm mb-4'
                >Até 7 dias úteis para todo Brasil*</span>

            </div>    
        </div> 

        <div>
        </div>
        
       </div>
    )
}

