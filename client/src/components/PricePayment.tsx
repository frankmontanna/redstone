import { formatPrice } from "@/utils/formatPrice";
import { useRouter } from "next/router";
import ssl from "../assets/ssl.png";
import Image from "next/image";
import { InstallmentProvider, useInstallment } from "@/context/InstallmentContext";

export function PricePayment() {
  const router = useRouter();



  const currentPrice = router.query.currentPrice as string

  const formattedCurrentPrice = formatPrice(Number(currentPrice));

  const { selectedInstallment } = useInstallment();

  const installmentPriceMath = Number(currentPrice) / selectedInstallment;
  
  const installmentPrice = formatPrice(installmentPriceMath);



  return (
    <div className=" flex flex-col gap-1 ">
       

      <button className="text-sm text-white font-bold  uppercase px-[212px] py-6  bg-main-btn-buy border-solid border-b-[8px] rounded-lg border-main-btn-buy-stroke ">
        comprar agora
      </button>

      <div className="pb-6 border-b-3 border-main-acordion-gray border-dashed  ">
        <Image src={ssl} alt="" className="m-auto" />
      </div>

      <div className="text-main-ligth-violet text-sm flex justify-between py-1 ">
        <span>
          <span className="font-bold"> E-mail de suporte:</span>{" "}
          contato@redsilverpanelas.com
        </span>

        <span>Possui cupom de desconto?</span>

      </div>
    </div>
  );
}
