import { useEffect, useState } from "react";
import userController from "./modules/users/users.controller";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    handleRender();
  }, []);

  const handleRender = async () => setUsers(await userController.findAll());

  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <div className="row m-0 h-100">
        <div className="col-2 p-4 bg-body-tertiary shadow">
          <h3>29/01/2026</h3>
        </div>
        <div className="col-10 p-5">
          <h2>Daniel Lugo Valenzuela 5B</h2>
          <hr />
          {users.length !== 0 ? (
            <section className="row">
              {users.map((item) => (
                <article className="col-4" key={item.username}>
                  <div className="card mb-3 border-0 shadow-sm rounded-4">
                    <div className="card-body">
                      <h5 className="d-flex align-items-center gap-2">
                        <i className="bi bi-person"></i>
                        <span>{item.fullName}</span>
                        <span className="fw-lighter text-muted">
                          ({item.username})
                        </span>
                      </h5>
                      <div className="mt-3 d-flex flex-wrap gap-2">
                        <span className="badge bg-dark bi bi-envelope">{item.email}</span>
                        <span className="badge bg-dark bi bi-phone">{item.phone}</span>
                        <span className={`badge ${item.active ? "bg-success" : "bg-danger"}`}>{item.active ? "Activo" : "Inactivo"}</span>
                      </div>

                      <div className="bg-body-tertiary rounded-3 mt-3 p-3"><strong>Roles del usuario:</strong>{" "}
                        {item.roles.join(", ")}</div>
                    </div>
                  </div>
                </article>
              ))}
            </section>
          ) : (
            <div className="alert alert-secondary rounded 4"><span>De momento no hay registros...</span></div>
          )}
        </div>
      </div>
    </main>
  );
}
