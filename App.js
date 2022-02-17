import { useState } from "react";
import "./App.css";
import Form from "./Components/exo1/Form";
import InscriptionForm from "./Components/exo2/InscriptionForm";
import ShoppingList from "./Components/exo3/ShoppingList";
import { MonContext } from "./MonContext";

function App() {
  let Provider = MonContext.Provider;
  const [listProduit, setlistProduit] = useState([]);
  // const recevoirData = (data) => {
  //   console.log(data);

  // };
  return (
    <div className="App">
      <Provider value={{ listProduit, setlistProduit }}>
        <h1>Formulaire React</h1>
        <Form />
        <InscriptionForm />
        <ShoppingList />
      </Provider>
    </div>
  );
}

export default App;

//getData={recevoirData} a la lign20
