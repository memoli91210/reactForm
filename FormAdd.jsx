import React, { useState, useContext } from "react";
import { MonContext } from "../../MonContext";

export default function FormAdd() {
  const { listProduit, setlistProduit } = useContext(MonContext);
  const [nom, setnom] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    setlistProduit((oldValue) => [...oldValue, nom]);
    setnom("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Nom du Produit"
          value={nom}
          onChange={(event) => setnom(event.target.value)}
        />
        <br />
        <button>Ajouter</button>
      </form>
      <ul></ul>
    </div>
  );
}
