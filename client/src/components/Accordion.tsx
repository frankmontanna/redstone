import React, { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

interface AccordionBarProps {}

export function AccordionBar(props: AccordionBarProps) {
  const [open, setOpen] = useState<number>(1);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <Accordion 
     
      open={open === 1}>
        <AccordionHeader 
        className="bg-main-acordion-gray p-7 text-main-red font-bold text-xl rounded-xl"
        onClick={() => handleOpen(1)}>
         Quais são os preços ?
        </AccordionHeader>
        <AccordionBody
        className="text-main-gray-text bg-main-acordion-gray px-7 mt-0 mb-7 "
        >
          Conteudo
        </AccordionBody>
      </Accordion>

      
    </Fragment>
  );
};


