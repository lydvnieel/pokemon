import { useEffect, useState } from "react";
import pokemonController from "./modules/pokemons/pokemons.controller";

export default function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    handleFindAll();
    },[]);
    
const handleFindAll = async()=> { setPokemons(  await pokemonController.findAll()
);
  
};

  return (
    <main style={{ width: "100vw", height: "100vh"}}>
      <div className="row m-0 h-100">
        <div className="col-2 p-4 bg-body-tertiary shadow">
          <h3>Sidebar</h3>
        </div>
        <div className="col-10 p-5">
          <h3>Contenido</h3>
          <hr />
          {pokemons.length === 0 ?(
            <div className="alert alert-secondary rounded-4">
              <span>De momento no hay registros...</span>
            </div>
          ): (
            <section className="row">
              {pokemons.map((pokemon, indice) => (
                <article key={indice} className="col-3">
                  <figure className="card rounded-4 border-2 shadow-sm">
                    <div className="card-body">
                      <h5>
                        <i className="bi bi-hexagon me-2"></i>
                        <span>{pokemon.name}</span>
                      </h5>
                      <div>
                        {pokemon.types.map((type, tIndex) => (
                          <span key={tIndex} className="badge bg-secondary me-2">
                            {type}
                          </span>
                        ))}
                      </div>
                      <div
                        className="bg-body-tertiary mt-3 w-100"
                        style={{ height: 250 }}
                      >
                        <span>Foto</span>
                      </div>
                    </div>
                  </figure>
                </article>
              ))}
            </section>
          )}
        </div>
      </div>
    </main>
  );
  {
  }
}