
import { CelebCard } from './CelebCard'

export function Celeb() { 
    return(
        <div className='bg-white py-16'>

            <div className='flex flex-col items-center'>
                <h1 className='text-4xl text-main-gray-text mb-6 font-bold'>A queridinha das <span className='text-main-red'>celebridades</span></h1>
                <span
                className='text-main-gray-main text-[17px] w-full max-w-[680px] mb-[56px] font-thin'
                >Musas fitness, nutricionistas e até grandes chefs de cozinha. Quem testa a RedSilver se apaixona! Assista aos vídeos:</span>
            </div>

            <CelebCard />


        </div>
    )
}