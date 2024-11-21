// Reference https://www.npmjs.com/package/react-onclickoutside

import { MutableRefObject, useEffect, useState } from "react";

export type UseClickOutsideInterface = {
  isListening: boolean;
  setIsListening: (isListen: boolean) => void;
  menuRef: MutableRefObject<HTMLDivElement | null>;
  setIsOpen: (isOpen: boolean) => void;
};

const listenForOutsideClicks =
  ({
    isListening,
    setIsListening,
    menuRef,
    setIsOpen,
  }: UseClickOutsideInterface) =>
  () => {
    if (isListening) return;
    if (!menuRef.current) return;

    setIsListening(true);

    const eventToListen = ["mousedown"];

    eventToListen.forEach(() => {
      document.addEventListener("mousedown", (event) => {
        const target = event.target as HTMLDivElement;

        if (menuRef.current) {
          event.stopPropagation();
          if (menuRef.current.contains(target)) return;
          setIsOpen(false);
        }
      });
    });
  };

const useClickOutside = (
  menuRef: MutableRefObject<HTMLDivElement | null>,
  handleClose: () => void
) => {
  const [isListening, setIsListening] = useState(false);

  useEffect(
    () =>
      listenForOutsideClicks({
        isListening,
        setIsListening,
        menuRef,
        setIsOpen: handleClose,
      }),
    [handleClose, isListening, menuRef]
  );
};

export default useClickOutside;
