import { useEffect, useState } from "react";
import UserController from "./modules/users/users.controller";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    handleRender()
  }, []);
  
  const handleRender = async() => setUsers(await UserController.findAll());

  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <div className="row m-0 h-100">
        <div className="col-2 p-4 bg-body-tertiary shadow">
          <h3>Sidebar</h3>
        </div>
        <div className="col-10 p-5">
          <h2>Contenido</h2>
          <hr />
          {users.length !== 0 ? (
                  <section className="row">
                    {users.map(item => (<article className="col-4">
                <div className="card mb-3 border-0 shadow-sm rounded-4">
              <div className="card-body">
                <h5>
                  <i className="bi bi-person"></i>
                  <span>{item.name}</span>
                  <span className="fw-lighter">{item.username}</span>
                </h5>
                <div className="mt-3">
                  <span className=" bi bi-envelope badge bg-dark me-2">
                    {item.email}
                  </span>
                  <span className="bi bi-phone badge bg-dark">{item.phone}</span>
                </div>
                <div className="bg body-tertiary rounded-3 mt-3 p-3">
                  <p><span className="bi fw-bold "> Ciudad:</span>&nbsp;<span>{item.address.city}</span></p>
                    <p><span className="bi fw-bold">Calle:</span>&nbsp;<span>{item.address.street}</span></p>
                    <p><span className="bi fw-bold">Departamento:</span>&nbsp;<span>{item.address.suite}</span></p>
                    <p className="mb-0"><span className="fw-bold">C.P:</span>&nbsp;<span>{item.address.zipcode}</span></p>
                </div>
              </div>
            </div>
                
            </article>))}
          </section>
          ) : (
                <div className="alert alert-secondary rounded 4">
              <span>De momento no hay registros...</span>
            </div>
          )}
        
        </div>
      </div>
    </main>
  );
}
