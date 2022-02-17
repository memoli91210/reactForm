import React from "react";
import FormAdd from "./FormAdd";
import ShowList from "./ShowList";
import { MonContext } from "../../MonContext";

export default function ShoppingList() {
  return (
    <div>
      <h1>Shopping List</h1>
      <FormAdd />
      <ShowList />
    </div>
  );
}
