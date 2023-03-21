import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TechContext } from "../../providers/TechContext";
import { StyledModalTech } from "./style";

export function ModalTech({ tech, setAddModal }) {
  const { deleteTech, updateTech } = useContext(TechContext);

  const schema = yup
    .object({
      title: yup.string().required("Nome inválido"),
      status: yup.string().required("Selecione o módulo"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      status: tech.status,
    },
  });

  function submit(formData) {
    updateTech(formData, tech.id);
    setAddModal(false);
  }

  return (
    <StyledModalTech>
      <div>
        <div className="header-modal">
          <h4>Tecnologia Detalhes</h4>
          <span onClick={() => setAddModal(false)}>x</span>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <label htmlFor="name">Nome do projeto</label>
          <input
            type="text"
            id="name"
            value={tech.title}
            placeholder="Digite aqui o nome do projeto"
            {...register("title")}
          />
          <label htmlFor="status">Status</label>
          <select name="status" id="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <div>
            <button className="btn-save" type="submit">
              Salvar alterações
            </button>
            <button
              className="btn-delete"
              onClick={(event) => {
                event.preventDefault(), deleteTech(tech.id), setAddModal(false);
              }}
            >
              Excluir
            </button>
          </div>
        </form>
      </div>
    </StyledModalTech>
  );
}
