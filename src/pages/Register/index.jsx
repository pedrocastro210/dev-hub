import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { StyledRegister } from "./style";
import { useForm } from "react-hook-form";
import { RegisterForm } from "../../components/Form/RegisterForm";

export function Register() {
  const schema = yup
    .object({
      name: yup.string().required("Nome inválido"),
      email: yup.string().required("E-mail inválido").email("E-mail inválido"),
      password: yup
        .string()
        .matches(/\d/, "Deve conter ao menos 1 número")
        .matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula")
        .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
        .matches(/(\W|_)/, "Deve conter ao menos 1 caracter especial")
        .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres"),
      confirm: yup
        .string()
        .oneOf([yup.ref("password")], "As senhas não conhecidem")
        .required("Senha obrigatória"),
      bio: yup.string().required("Digite sua Bio"),
      contact: yup.string().required("Contato inválido"),
      course_module: yup.string().required("Selecione o módulo"),
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
    <StyledRegister>
      <div className="containner">
        <div className="header-containner">
          <img src={logo} alt="logo" />
          <Link to={"/home"}>Voltar</Link>
        </div>
        <div className="containner-form">
          <h2>Crie sua conta</h2>
          <p>Rápido e grátis, vamos nessa</p>

          <RegisterForm
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
          />
        </div>
      </div>
    </StyledRegister>
  );
}
