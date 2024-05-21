import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
//import { api } from "@/lib/axios";
import AuthService from "../../service/AuthService";
import { IUserLogin } from "../../commons/interfaces";

export function LoginPage() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
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

  const onClickLogin = async () => {
    setPendingApiCall(true);
    const user: IUserLogin = {

      username: form.username,
      password: form.password,
    };

    const response = await AuthService.login(user);
    if (response.status === 200 || response.status === 201) {
      setApiSuccess("Login realizado com sucesso!");

      setTimeout(() => {
        navigate("/home")
      }, 1000
      )
    } else {
      setApiError("Usuário ou senha incorretos ou inexistentes!");
      if (response.data.validationErrors) {
        setErrors(response.data.validationErrors);
      }

    }

    setPendingApiCall(false);
  };


  return (
    <>
      <div className="container">
        <h1 className="text-center">
          Login
        </h1>
        <div className="col-12 mb-3">
          
          <Input
            id="username"
            name="username"
            label="Informe seu username:"
            type="text"
            value={form.username}
            placeholder="Informe seu usuario"
            hasError={errors.username ? true : false}
            error={errors.username}
            onChange={onChange}
            className="form-control"
          />
        </div>
        <div className="col-12 mb-3">
          
          <Input
            id="password"
            name="password"
            label="Informe a sua senha:"
            type="text"
            value={form.password}
            placeholder="Informe a sua senha"
            hasError={errors.password ? true : false}
            error={errors.password}
            onChange={onChange}
            className="form-control"
          />
        </div>
        {apiError && (
          <div className="alert alert-danger text-center">{apiError}</div>
        )}
        {apiSuccess && (
          <div className="alert alert-success text-center">{apiSuccess}</div>
        )}
        <div className="text-center">
          <button disabled={pendingApiCall} className="btn btn-primary" onClick={onClickLogin}>
          {pendingApiCall && (
              <div
                className="spinner-border spinner-border-sm text-light-spinner mr-sm-1"
                role="status"
              ></div>
            )}
            Login
          </button>
          <div className="text-center">
            <Link to="/signup">Cadastre-se</Link>
          </div>
        </div>
      </div>
    </>
  );
}