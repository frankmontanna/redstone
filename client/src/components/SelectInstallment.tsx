import { useRouter } from "next/router";
import { formatPrice } from "@/utils/formatPrice";
import { useInstallment } from "@/context/InstallmentContext";

export function SelectInstallment() {
  const router = useRouter();
  const currentPrice = router.query.currentPrice as string;
  const numberOfInstallments = 12;

  const { selectedInstallment, setSelectedInstallment } = useInstallment();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSelectedInstallment = parseInt(event.target.value);
    setSelectedInstallment(newSelectedInstallment);
  };

  const installmentOptions = () => {
    const options = [];
    const price = Number(currentPrice);

    for (let i = numberOfInstallments; i >= 1; i--) {
      const installmentPrice = price / i;
      const formattedInstallmentPrice = formatPrice(installmentPrice);
      options.push(
        <option value={i} key={i}>
          {i}x de {formattedInstallmentPrice} (sem juros)
        </option>
      );
    }

    return options;
  };

  return (
    <div>
        <span
             className = "text-base font-bold"
            >Parcelamento</span>
        <select
            name=""
            id=""
            className="bg-white border border-main-outline-gray w-full h-11 rounded px-[18px] py-[10px]"
            onChange={handleChange}
            >
            {installmentOptions()}
        </select>

    </div>
  );
}
