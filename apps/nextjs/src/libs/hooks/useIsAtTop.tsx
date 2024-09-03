import { useEffect, useState } from "react";

export default function useIsAtTop() {
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    setIsAtTop(window.scrollY === 0);
    const handleScroll = () => setIsAtTop(window.scrollY === 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isAtTop;
}
