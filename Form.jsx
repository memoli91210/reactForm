import React, { useState } from "react";

export default function Form() {
  const [fullname, setfullname] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="fullname"
          value={fullname}
          onChange={(event) => setfullname(event.target.value)}
        />
        <br />
        <button>Ajouter</button>
      </form>
    </div>
  );
}
