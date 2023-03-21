import { useContext, useEffect, useState } from "react";
import { TechContext } from "../../providers/TechContext";
import { ModalTech } from "../ModalUpdateTech";
import { StyledListTech } from "./style";

export function ListTech() {
  const { listTech, loadUser } = useContext(TechContext);
  const [addModal, setAddModal] = useState(false);
  const [tech, setTech] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <StyledListTech>
      {listTech.length > 0 ? (
        <>
          {addModal ? (
            <ModalTech tech={tech} setAddModal={setAddModal} />
          ) : null}
          <ul>
            {listTech.map((item) => {
              return (
                <>
                  <li key={item.id}>
                    <div
                      onClick={() => {
                        setTech(item), setAddModal(true);
                      }}
                    >
                      <h3 className="title">{item.title}</h3>
                      <p className="status">{item.status}</p>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </>
      ) : (
        <h3>Nenhuma tecnologia encontrada</h3>
      )}
    </StyledListTech>
  );
}
