import { useEffect } from "react";

export default function PageTransition({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-enter">
      {children}
    </div>
  );
}
