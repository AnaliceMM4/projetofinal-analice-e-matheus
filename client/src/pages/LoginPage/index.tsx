import { IUserLogin } from "@/commons/interfaces";
import AuthService from "@/service/AuthService";
import { ChangeEvent, useState } from "react";
import logo from '@/images/logo.png'; // Caminho para o logo na pasta images
import { Link, useNavigate } from "react-router-dom";
import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

export function LoginPage() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [pendingApiCall, setPendingApiCall] = useState(false);
  const [apiError, setApiError] = useState("");
  const [apiSuccess, setApiSuccess] = useState("");
  const navigate = useNavigate();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setForm((previousForm) => {
      return {
        ...previousForm,
        [name]: value,
      };
    });
  };

  const onClickLogin = async () => {
    const login: IUserLogin = {
      username: form.username,
      password: form.password,
    };

    const response = await AuthService.login(login);
    if (response.status === 200) {
      setApiSuccess("Autenticação realizada com sucesso!");
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } else {
      setApiError("Erro ao autenticar o usuário!");
    }

    setPendingApiCall(false);
  };

  return (
    <>

      <div className="container-fluid bg-dark">
        <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
          <div className="col-12 col-md-4">
            <Link to="/" className="navbar-brand text-center">
              <img src={logo} className="logo" alt="Overclock" style={{ width: '15rem', height: '15rem'}} />
            </Link>
            <h1 className="text-center text-white">Login</h1>

            <div className="mb-3 text-white">
              <label htmlFor="username">Informe seu usuário:</label>
              <div className="input-group">
                <span className="input-group-text"><FaUser /></span>

                <input
                  type="text"
                  id="username"
                  name="username"
                  value={form.username}
                  placeholder="Usuário"
                  className="form-control"
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="mb-3 text-white">
              <label htmlFor="password">Informe sua senha:</label>
              <div className="input-group">
                <span className="input-group-text"><RiLockPasswordFill /></span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={form.password}
                  placeholder="******"
                  className="form-control"
                  onChange={onChange}
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
                onClick={onClickLogin}
              >
                {pendingApiCall && (
                  <div
                    className="spinner-border spinner-border-sm text-light-spinner"
                    role="status"
                  ></div>
                )}
                Entrar
              </button>
            </div>
            <div className="text-center text-white">
              <span>Não tem conta? </span>
              <Link to="/signup" className="text-danger">Cadastre-se</Link>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}