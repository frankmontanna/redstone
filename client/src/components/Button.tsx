interface ButtonProps  { 
    title: string,
}


export function Button(props: ButtonProps) {
    return(
           <div>
             <button className="px-[30px] py-[21px] text-lg font-bold text-white bg-main-green inline-block rounded box-border  uppercase">
               {props.title}
            </button>
           </div>
    )
}