import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export function LoginForm({ register, handleSubmit, errors }) {
  const { loginUser } = useContext(UserContext);

  return (
    <form onSubmit={handleSubmit(loginUser)}>
      <div className="email">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Digite aqui seu e-mail..."
          {...register("email")}
        />
        <p>{errors.email?.message}</p>
      </div>
      <div className="password">
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          placeholder="Digite aqui sua senha..."
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
      </div>

      <button type="submit">Entrar</button>
    </form>
  );
}
