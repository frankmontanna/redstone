import { FormHeader } from "./FormhHeader";
import { SpanField } from "./SpanField";

export function PayDataForm() { 
    return(
        <div className="w-full">
            <section className="bg-white rounded-t-xl overflow-hidden  filter drop-shadow(0px 0px 13px rgba(82, 63, 105, 0.05)) ">

            {/* Header form  */}
            <FormHeader title='1. Dados Pessoais'/>     

            {/* form inputs  */}
            <div
                className="p-[25px] flex flex-col gap-1"
            >
            

                <SpanField
                title="Nome Completo"
                placeholder="Nome Completo"
                />

                <SpanField
                title="E-mail"
                placeholder="Ex: joaosilva@gmail.com"

                
                />

                {/* DDD e CPF  */}
                <div
                className="gap-5 flex "
                >
                    <SpanField
                    title="Celular com DDD"
                    placeholder="(11) 9999-1234"
                    />

                    <SpanField
                    title="CPF ou CNPJ"
                    placeholder="123.456.789.12"
                    />
                </div>

                <SpanField 
                    title="CEP"
                    width="w-1/4"
                    
                />

                <SpanField
                title="Endereço"
                />

                {/* Complemento e numero  */}
                <div
                className="flex gap-5 "
                >
                        <SpanField
                    title="Número"
                    width="w-1/3"
                    />

                    <SpanField
                    title="Complemento"
                    width="w-2/3"
                    />

                    
                </div>

                <SpanField
                title="Bairro"
                />

                <div
                    className="flex gap-5"
                >
                    <SpanField
                    title="Cidade"
                    />

                    <SpanField
                    title="Estado"
                    />
                </div>
                

                

            </div>


            </section>
        </div>
    )
}