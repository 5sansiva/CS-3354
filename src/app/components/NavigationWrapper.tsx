'use client'

import { usePathname } from "next/navigation";
import NavBar from "./Navbar";

export default function NavigationWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHiddenPage = pathname === "/" || pathname === "/Home" || pathname === "/Signup";

  return (
    <>
      {!isHiddenPage && <NavBar />}
      {children}
    </>
  );
}