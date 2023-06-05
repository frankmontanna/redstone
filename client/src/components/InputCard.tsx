import React from 'react';


export const InputCard = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
  return (
    <div className="flex flex-col">
            <span
             className = "text-sm font-bold text-[#333]"
            >{props.title}</span>
            <input
            ref={ref} {...props}
            className="bg-white border border-main-outline-gray w-full h-11 rounded px-[18px] py-[10px]"
             />
    </div>
  );
});
