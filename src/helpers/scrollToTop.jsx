import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll back to the top of the page on navigation
  }, [pathname]);

  return null;
};

export default ScrollToTop;
