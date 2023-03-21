import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { StyledHome } from "./style";
import { ListTech } from "../../components/ListTech";
import { UserContext } from "../../providers/UserContext";
import { TechContext } from "../../providers/TechContext";
import { ModalCreate } from "../../components/ModalCreateTech";
import { api } from "../../services/api";

export function RenderDashboard() {
  const { setModalCreate } = useContext(TechContext);
  const [userDash, setUserDash] = useState("");

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@kenziehub:token"));

    async function loadUser() {
      try {
        const response = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserDash(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    loadUser();
  }, []);

  function logout() {
    localStorage.removeItem("@kenziehub:token");
    localStorage.removeItem("@kenziehub:id");
  }

  return (
    <StyledHome>
      <header>
        <img src={logo} alt="logo" />
        <NavLink to={"/home"} onClick={logout}>
          Sair
        </NavLink>
      </header>
      <div className="info-user">
        <h1>Olá, {userDash?.name}</h1>
        <p>{userDash?.course_module}</p>
      </div>
      <div className="content">
        <div className="box-header">
          <h2>Tecnologias</h2>
          <button onClick={() => setModalCreate(true)}>+</button>
        </div>
        <ModalCreate />
        <div className="box-tec">
          <ListTech />
        </div>
      </div>
    </StyledHome>
  );
}
