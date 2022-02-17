import React, { useContext } from "react";
import { MonContext } from "../../MonContext";

export default function ShowList() {
  let { listProduit } = useContext(MonContext);

  return (
    <div>
      <h1> afficher la liste des produit</h1>
      <ul>
        {listProduit.map((produit, index) => {
          return <li key={index}>{produit}</li>;
        })}
      </ul>
    </div>
  );
}
