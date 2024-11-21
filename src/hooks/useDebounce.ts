import React, { useEffect } from "react";

export const useDebounce = (callback: () => void, delay?: number) => {
  const timeout = React.useRef<NodeJS.Timeout | null>(null);

  const call = () => {
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(callback, delay);
  };

  useEffect(
    // useEffect cleanup
    () => () => {
      if (timeout.current) clearTimeout(timeout.current);
    },
    []
  );

  return { call };
};
