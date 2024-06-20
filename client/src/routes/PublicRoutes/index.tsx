import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

import { Navigate, Outlet, useLocation } from "react-router-dom";

export function PublicRoutes() {
  return  (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  ) 
    
}
