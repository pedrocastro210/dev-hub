import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StyledModalCreate } from "./style";
import { TechContext } from "../../providers/TechContext";

export function ModalCreate() {
  const { modalCreate, setModalCreate, createTech } = useContext(TechContext);

  const schema = yup
    .object({
      title: yup.string().required("Nome inválido"),
      status: yup.string().required("Selecione o módulo"),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function submit(formData) {
    createTech(formData);
    setModalCreate(false);
  }

  return (
    <div>
      {modalCreate ? (
        <StyledModalCreate>
          <div>
            <div className="header-modal">
              <h4>Cadastrar Tecnologia</h4>
              <span onClick={() => setModalCreate(false)}>x</span>
            </div>
            <form onSubmit={handleSubmit(submit)}>
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" {...register("title")} />
              <p>{errors.title?.message}</p>
              <label htmlFor="status">Selecionar Status</label>
              <select name="status" id="status" {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              <button type="submit">Cadastrar</button>
            </form>
          </div>
        </StyledModalCreate>
      ) : null}
    </div>
  );
}
