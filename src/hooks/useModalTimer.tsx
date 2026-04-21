import { useEffect, useState } from "react";

export const useModalTimer = (openDelay = 3000, closeDelay = 10000) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const openTimer = setTimeout(() => {
      setIsVisible(true);
    }, openDelay);

    const closeTimer = setTimeout(() => {
      setIsVisible(false);
    }, openDelay + closeDelay);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
    };
  }, [openDelay, closeDelay]);

  return {
    isVisible,
    setIsVisible,
  };
};
