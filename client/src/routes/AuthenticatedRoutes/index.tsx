import { Navigate, Outlet, useLocation } from "react-router-dom"
import AuthService from "../../service/AuthService";
import { NavBar } from "../../components/NavBar";

export function AuthenticatedRoutes() {
    const location = useLocation();
    const isAuthenticated = AuthService.isAuthenticated();

    return isAuthenticated ? (
        <>
            <NavBar />
            <Outlet />
        </>
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    )
}