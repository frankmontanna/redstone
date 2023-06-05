import Image from "next/image"


interface IconPayMethodsProps { 
   title?: string,
   icon : string,
}

export function IconPayMethods(props: IconPayMethodsProps) {
    return (
        <div className="max-w-[114px] flex w-full items-center  h-16 gap-[6px] px-[14px]  py-[16px]  border-2 rounded-md border-main-ligth-blue ">
          <Image src={props.icon} alt=""  />
        <span className="text-main-ligth-blue text-xs">{props.title}</span>
      </div>
    ) 
}