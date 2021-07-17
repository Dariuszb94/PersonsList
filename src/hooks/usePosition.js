import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export default function usePosition() {
  const [positionRAW, setPosition] = useState({ x: null, y: null });
  const [position] = useDebounce(positionRAW, 1);

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };
    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return position;
}
