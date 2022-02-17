import React, { useState } from "react";

export default function InscriptionForm({ getData }) {
  const [nom, setnom] = useState("");
  const [mail, setmail] = useState("");
  const [password, setpassword] = useState("");
  const [genre, setgenre] = useState("homme");

  const submitHandler = (event) => {
    event.preventDefault();
    getData({ nom, mail, password, genre });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="nom"
          value={nom}
          onChange={(event) => setnom(event.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="email"
          value={mail}
          onChange={(event) => setmail(event.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setpassword(event.target.value)}
        />
        <br />
        <select
          value={genre}
          onChange={(event) => setgenre(event.target.value)}
        >
          <option value="homme">h</option>
          <option value="femme">f</option>
        </select>
        <br />
        {console.log(genre)}
        <button>Valide</button>
      </form>
    </div>
  );
}
