import useDisclosure from "@hooks/useDisclosure";
import React from "react";

const Disclosure = ({ children, defaultOpen, ...props }) => {
  const { isOpen, onToggle } = useDisclosure({ open: defaultOpen });
  return <div {...props}>{children({ isOpen, onToggle })}</div>;
};

export default Disclosure;
