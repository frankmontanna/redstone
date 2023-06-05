import { createContext, useContext, useState } from "react";

interface InstallmentContextData {
  selectedInstallment: number;
  setSelectedInstallment: (installment: number) => void;
}

const InstallmentContext = createContext<InstallmentContextData>({
  selectedInstallment: 12,
  setSelectedInstallment: () => {},
});

export const useInstallment = () => useContext(InstallmentContext);

interface InstallmentProviderProps {
  children: React.ReactNode;
}

export const InstallmentProvider = ({ children }: InstallmentProviderProps) => {
  const [selectedInstallment, setSelectedInstallment] = useState(12);

  return (
    <InstallmentContext.Provider value={{ selectedInstallment, setSelectedInstallment }}>
      {children}
    </InstallmentContext.Provider>
  );
};
