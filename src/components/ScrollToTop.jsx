import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Don't scroll to top when using browser Back/Forward
    if (navigationType === "POP") return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname, navigationType]);

  return null;
}
