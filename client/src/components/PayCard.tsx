import "../../node_modules/card-react/lib/card.css";

import CardReactFormContainer from "card-react";

import { FormHeader } from "./FormhHeader";
import { PaymentMethod } from "./PaymetMethod";
import { PricePayment } from "./PricePayment";
import { InputCard } from "./InputCard";

import { SelectInstallment } from "./SelectInstallment";


export function PayCard() {
  return (
    <div className="w-full">
      <section className="bg-white rounded-t-xl overflow-hidden  filter drop-shadow(0px 0px 13px rgba(82, 63, 105, 0.05)) ">
        <FormHeader title="2. Formas de Pagamento" />

        {/* Body FORM  */}
        <div className="p-[25px]">
          <PaymentMethod />

          <CardReactFormContainer
            container="card-wrapper"
            formInputsNames={{
              number: "CCnumber", // optional — default "number"
              expiry: "CCexpiry", // optional — default "expiry"
              cvc: "CCcvc", // optional — default "cvc"
              name: "CCname", // optional - default "name"
            }}
            classes={{
              valid: "valid-input", // optional — default 'jp-card-valid'
              invalid: "invalid-input", // optional — default 'jp-card-invalid'
            }}
          >
            <div className="flex justify-between gap-4 items-center mt-6 border-b pb-6 border-dashed border-r-main-acordion-gray ">
              <div className="w-full flex flex-col">
                <InputCard  title="Número do cartão"  placeholder="Card number" type="text" name="CCnumber" />
                <InputCard  title="Nome do titular do cartão"  placeholder="Ex: Marcos Silva" type="text" name="CCname"/>

                <InputCard  title="Validade"  placeholder="Ex: 06/25" type="text" name="CCexpiry" />

                <InputCard  title="Validade"  placeholder="MM/YY" type="text" name="CCexpiry" />

                <InputCard  title="Código de segurança (CVV)"  placeholder="" type="text" name="CCcvc" />
            
              </div>

              <div id="card-wrapper" className="w-full"></div>
            </div>

            <SelectInstallment />

              


          </CardReactFormContainer>

          <PricePayment />
        </div>
      </section>
    </div>
  );
}



