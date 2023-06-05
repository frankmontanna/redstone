import { Input } from "@/components/Input";
import { PayDataForm } from "@/components/PayDataForm";
import { SpanField } from "@/components/SpanField";
import { PayCard } from "./PayCard";
import { title } from "process";


export function FormCard() { 
    return (
        <div>
            <form action="">
                <main 
                    className="px-[277px] grid grid-cols-2 divide-x-[0] gap-8 "
                >
                    <PayDataForm />
                    <PayCard />
                x
                    
                </main>


            </form>
        </div>
    )
}

