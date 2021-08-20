import { useEffect, useRef } from "react";
export function useHorizontalScroll() {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;

    if (el) {
      let last = Date.now();
      const onWheel = (e) => {
        if (Date.now() - last < 300) return;
        if (e.deltaY == 0) return;
        e.preventDefault();
        last = Date.now();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "smooth",
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}
