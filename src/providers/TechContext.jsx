import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const TechContext = createContext({});

export function TechProvider({ children }) {
  const [listTech, setListTech] = useState([]);
  const [modalCreate, setModalCreate] = useState(false);
  const navigate = useNavigate();

  async function loadUser() {
    const idUser = JSON.parse(localStorage.getItem("@kenziehub:id"));
    const token = JSON.parse(localStorage.getItem("@kenziehub:token"));

    try {
      const response = await api.get(`/users/${idUser}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setListTech(response.data.techs);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@kenziehub:token"));

    token ? loadUser() : navigate("/home");
  }, []);

  async function createTech(formData) {
    const token = JSON.parse(localStorage.getItem("@kenziehub:token"));

    try {
      toast.success("Tecnologia criada com sucesso");

      const response = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      loadUser();
      setModalCreate(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTech(id) {
    const token = JSON.parse(localStorage.getItem("@kenziehub:token"));

    try {
      toast.warning("Tecnologia deletada com sucesso");

      const response = await api.delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      loadUser();
    } catch (error) {
      console.log(error);
    }
  }

  async function updateTech(formData, id) {
    try {
      toast.success("Alteração realizada com sucesso");

      const token = JSON.parse(localStorage.getItem("@kenziehub:token"));

      const response = await api.put(`/users/techs/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      loadUser();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TechContext.Provider
      value={{
        listTech,
        loadUser,
        modalCreate,
        setModalCreate,
        createTech,
        deleteTech,
        updateTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}
