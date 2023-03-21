import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { StyledLogin } from "./style";
import logo from "../../assets/logo.png";
import "react-toastify/dist/ReactToastify.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoginForm } from "../../components/Form/LoginForm";

export function Login() {
  const schema = yup
    .object({
      email: yup.string().required("E-mail necessário"),
      password: yup.string().required("Senha necessária"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <StyledLogin>
      <img src={logo} alt="logo" />
      <div className="containner-form">
        <h2>Login</h2>

        <LoginForm
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
        />

        <p>Ainda não possui conta ?</p>
        <Link to={"/register"}>Cadastre-se</Link>
      </div>
    </StyledLogin>
  );
}
