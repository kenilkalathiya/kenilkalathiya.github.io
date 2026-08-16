import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

// Per-pathname scroll memory for the lifetime of the tab. React Router
// (declarative <Routes>, not the data-router APIs) doesn't restore scroll
// position on its own, so: navigating to a new page (PUSH) starts at the
// top, while navigating back (POP — the browser back button or an in-app
// "back" action) restores wherever the user was on that page.
const scrollPositions = new Map();

export default function ScrollManager() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const leavingPathname = useRef(location.pathname);

  useEffect(() => {
    return () => {
      scrollPositions.set(leavingPathname.current, window.scrollY);
    };
  }, [location.pathname]);

  useEffect(() => {
    leavingPathname.current = location.pathname;

    if (navigationType === "POP" && scrollPositions.has(location.pathname)) {
      window.scrollTo(0, scrollPositions.get(location.pathname));
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, navigationType]);

  return null;
}
