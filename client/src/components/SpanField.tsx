import { Input } from "./Input";

interface SpanFieldProps {
    title: string,
    width?: string,
    placeholder?: string,
}

export function SpanField({ title, width = 'w-full', placeholder }: SpanFieldProps) {


    
    return (
        <div className={`${width}`}>
            <span
             className = "text-base font-bold"
            >{title}</span>
            <input className="bg-white border border-main-outline-gray w-full h-11 rounded px-[18px] py-[10px]" placeholder={placeholder} />

        </div>
    );
}
