import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import AuthService from "@/service/AuthService";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export function PrivateRoutes() {
  const location = useLocation();
  const isAuthenticated = AuthService.isAuthenticated();

  return isAuthenticated ? (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}