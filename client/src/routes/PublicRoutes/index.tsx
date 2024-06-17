import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import AuthService from "@/service/AuthService";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export function PublicRoutes() {
  const location = useLocation();
  const isAuthenticated = AuthService.isAuthenticated();

  return  (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  ) 
    
}
