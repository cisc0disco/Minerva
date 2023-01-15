import { useEffect, useState } from "react";

const [width, setWidth] = useState<number>(window.innerWidth);

function handleWindowSizeChange() {
  setWidth(window.innerWidth);
}
useEffect(() => {
  window.addEventListener("resize", handleWindowSizeChange);
  return () => {
    window.removeEventListener("resize", handleWindowSizeChange);
  };
}, []);

export const isMobile = width <= 768;
