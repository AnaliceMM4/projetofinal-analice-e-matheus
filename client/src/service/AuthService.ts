import { api } from "@/lib/axios";
import { IUserLogin, IUserSignup } from "@/commons/interfaces";

const signup = async (user: IUserSignup): Promise<any> => {
  let response;
  try {
    response = await api.post("/users/create", user);
  } catch (error: any) {
    response = error.response;
  }
  return response;
};

const login = async (user: IUserLogin): Promise<any> => {
  let response;
  try {
    response = await api.post("/login", user);
    if (response.status === 200) {
      localStorage.setItem("token", JSON.stringify(response.data.token));
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
    }
  } catch (error: any) {
    response = error.response;
  }
  return response;
};


const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("token");
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
      token
    )}`;
    return true;
  }
  return false;
};

const logout = (): void => {
  localStorage.removeItem("token");
  api.defaults.headers.common["Authorization"] = "";
};

const getCurrentUser = (): number | null => {
  const token = localStorage.getItem("token");
  if (token) {
    const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decodifica o payload do token JWT
    return decodedToken.id; // Assume-se que o token contém o ID do usuário
  }
  return null;
};


const AuthService = {
  signup,
  login,
  isAuthenticated,
  logout,
  getCurrentUser,
};

export default AuthService;
