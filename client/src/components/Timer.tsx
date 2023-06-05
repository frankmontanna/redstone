export function Timer() { 
    return (

        <div className="flex gap-[10px] pr-[50px]">


            <div className="flex flex-col items-center justify-center">
                <div className="bg-white w-[50px] h-[40px] text-[21px] py-[7px] flex items-center justify-center text-center font-bold rounded-[6px] border-0">
                    0
                </div>
                <span className="text-[9px] text-white font-bold">Horas</span>
            </div>

            <div className="flex flex-col items-center justify-center">
                <div className="bg-white w-[50px] h-[40px] text-[21px] py-[7px] flex items-center justify-center text-center font-bold rounded-[6px] border-0">
                    0
                </div>
                <span className="text-[9px] text-white font-bold">Minutos</span>
            </div>

            <div className="flex flex-col items-center justify-center">
                <div className="bg-white w-[50px] h-[40px] text-[21px] py-[7px] flex items-center justify-center text-center font-bold rounded-[6px] border-0">
                    0
                </div>
                <span className="text-[9px] text-white font-bold">Segundos</span>
            </div>

       </div>

    )
}