// We use this mounted / hook so we wont get the <div> error next.js gives us

import { useEffect, useState } from "react";


// this just checks if the component has mounted or not
export const useMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, [])

  return { hasMounted }

}























