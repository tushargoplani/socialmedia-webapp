import { useState, useEffect } from "react";

function useSingleAndDoubleClick(
  actionSimpleClick,
  actionDoubleClick,
  delay = 200
) {
  const [click, setClick] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (click === 1) actionSimpleClick();
      setClick(0);
    }, delay);
    if (click === 2) actionDoubleClick();
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [click]);

  return () => setClick((prev) => prev + 1);
}

export default useSingleAndDoubleClick;
