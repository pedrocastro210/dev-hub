import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export function RegisterForm({ register, handleSubmit, errors }) {
  const { registerUser } = useContext(UserContext);

  return (
    <form onSubmit={handleSubmit(registerUser)} className="box-form">
      <div>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        <p>{errors.name?.message}</p>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
      </div>
      <div>
        <label htmlFor="confirm">Confirmar senha</label>
        <input
          type="password"
          id="confirm"
          placeholder="Digite novamente sua senha"
          {...register("confirm")}
        />
        <p>{errors.confirm?.message}</p>
      </div>
      <div>
        <label htmlFor="bio">Bio</label>
        <input
          type="text"
          id="bio"
          placeholder="Fale sobre você"
          {...register("bio")}
        />
        <p>{errors.bio?.message}</p>
      </div>
      <div>
        <label htmlFor="contact">Contato</label>
        <input
          type="text"
          id="contact"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        <p>{errors.contact?.message}</p>
      </div>
      <div>
        <label htmlFor="select">Selecionar módulo</label>
        <select name="select" id="select" {...register("course_module")}>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)
          </option>
        </select>
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
}
