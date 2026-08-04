import { createContext, useContext, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

type AccordionContextType = {
  openItem: string | null;
  toggle: (value: string) => void;
};

const AccordionContext = createContext<AccordionContextType | null>(null);

function useAccordion() {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error("Accordion components must be inside Accordion.");
  }

  return context;
}

type AccordionProps = {
  children: ReactNode;
};

export function Accordion({ children }: AccordionProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  function toggle(value: string) {
    setOpenItem((current) => (current === value ? null : value));
  }
  return (
    <AccordionContext.Provider value={{ openItem, toggle }}>
      <div className="flex flex-col">{children}</div>
    </AccordionContext.Provider>
  );
}

type AccordionItemProps = {
  value: string;
  children: ReactNode;
};

export function AccordionItem({ value, children }: AccordionItemProps) {
  return (
    <div className="border-b" data-value={value}>
      {children}
    </div>
  );
}

type AccordionTriggerProps = {
  children: ReactNode;
  value: string;
};

export function AccordionTrigger({ children, value }: AccordionTriggerProps) {
  const { openItem, toggle } = useAccordion();

  const isOpen = openItem === value;

  return (
    <button
      onClick={() => toggle(value)}
      className="flex w-full items-center justify-between py-4 font-medium"
    >
      {children}
      <ChevronDown
        className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
      />
    </button>
  );
}

type AccordionContentProps = {
  value: string;
  children: ReactNode;
};

export function AccordionContent({ value, children }: AccordionContentProps) {
  const { openItem } = useAccordion();

  const isOpen = openItem === value;

  return (
    <div
      className={`overflow-hidden transition-all duration-200 ${
        isOpen ? "max-h-96 py-4" : "max-h-0"
      }`}
    >
      {children}
    </div>
  );
}


