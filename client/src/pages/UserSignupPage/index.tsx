import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/Input";
import { api } from "@/lib/axios";
import logo from '@/images/logo.png'; 
import AuthService from "../../service/AuthService";
import { IUserSignup } from "../../commons/interfaces";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { PiIdentificationCardLight } from "react-icons/pi";

export function UserSignupPage() {
  const [form, setForm] = useState({
    displayName: "",
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    displayName: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [pendingApiCall, setPendingApiCall] = useState(false);
  const [apiError, setApiError] = useState("");
  const [apiSuccess, setApiSuccess] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setForm((previousForm) => {
      return {
        ...previousForm,
        [name]: value,
      };
    });
  };

  const onClickSignup = async () => {
    setPendingApiCall(true);

    const user: IUserSignup = {
      displayName: form.displayName,
      username: form.username,
      password: form.password,
    };

    const response = await AuthService.signup(user);
    if (response.status === 200 || response.status === 201) {
      setApiSuccess("Cadastro realizado com sucesso!");
      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } else {
      setApiError("Erro ao cadastrar o usuário!");
      if (response.data.validationErrors) {
        setErrors(response.data.validationErrors);
      }
    }

    setPendingApiCall(false);
  };

  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
          <div className="col-12 col-md-4">
          <Link to="/" className="text-center ">
              <img src={logo} className="logo" alt="Overclock" style={{ width: '10rem', height: '10rem'}} />
            </Link>
            <h1 className="text-center text-white">
              Cadastre-se
              {/* Sign Up - {form.displayName} - {form.username} */}
            </h1>
            <div className="mb-3 text-white">
              <label htmlFor="displayName">Informe seu nome</label>
              <div className="input-group">
                <span className="input-group-text"><PiIdentificationCardLight /></span>
                <Input
                  id="displayName"
                  name="displayName"
                  label=""
                  type="text"
                  value={form.displayName}
                  placeholder="Nome"
                  hasError={errors.displayName ? true : false}
                  error={errors.displayName}
                  onChange={onChange}
                  className="form-control"
                />
              </div>
            </div>

            <div className="mb-3 text-white">
              <label htmlFor="username">Informe seu usuário:</label>
              <div className="input-group">
                <span className="input-group-text"><FaUser /></span>

                {/* Input */}
                <Input
                  id="username"
                  name="username"
                  label=""
                  type="text"
                  value={form.username}
                  placeholder="Usuário"
                  hasError={errors.username ? true : false}
                  error={errors.username}
                  onChange={onChange}
                  className="form-control"
                />
              </div>
            </div>

            <div className="mb-3 text-white">
              <label htmlFor="password">Informe sua senha:</label>
              <div className="input-group">
                <span className="input-group-text"><RiLockPasswordFill /></span>

                <Input
                  id="password"
                  name="password"
                  label=""
                  type="text"
                  value={form.password}
                  placeholder="Senha"
                  hasError={errors.password ? true : false}
                  error={errors.password}
                  onChange={onChange}
                  className="form-control"
                />
              </div>
            </div>

            {apiError && (
              <div className="alert alert-danger text-center">{apiError}</div>
            )}
            {apiSuccess && (
              <div className="alert alert-success text-center">{apiSuccess}</div>
            )}
            <div className="text-center">
              <button
                disabled={pendingApiCall}
                className="btn btn-danger col-md-12"
                onClick={onClickSignup}
              >
                {pendingApiCall && (
                  <div
                    className="spinner-border spinner-border-sm text-light-spinner mr-sm-1"
                    role="status"
                  ></div>
                )}
                Cadastrar
              </button>
            </div>
            <div className="text-center text-white">
            <span>Já tem conta? </span>
              <Link to="/login" className="text-danger">Faça Login</Link>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
