import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  async function registerUser(formData) {
    try {
      const response = await api.post("/users", formData);

      toast.success("Cadastro realizado com sucesso");

      navigate("/home");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  async function loginUser(formData) {
    try {
      const response = await api.post("/sessions", formData);
      toast.success("Login realizado com sucesso");

      localStorage.setItem(
        "@kenziehub:token",
        JSON.stringify(response.data.token)
      );

      localStorage.setItem(
        "@kenziehub:id",
        JSON.stringify(response.data.user.id)
      );

      navigate("/dashboard");
    } catch (error) {
      toast.error("Usuário ou senha incorretos");
    }
  }

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@kenziehub:token"));

    token
      ? navigate("/dashboard")
      : localStorage.removeItem("@kenziehub:token") && navigate("/home");

    async function loadUser() {
      const token = JSON.parse(localStorage.getItem("@kenziehub:token"));

      try {
        const response = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);
      } catch (error) {
        console.log(error);
        localStorage.removeItem("@kenziehub:token");
      }
    }

    loadUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, registerUser, loginUser }}>
      {children}
    </UserContext.Provider>
  );
}
