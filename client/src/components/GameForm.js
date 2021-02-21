import React, { useState } from "react";
// import "./GameForm.css";
import { Link, useHistory } from 'react-router-dom';
import "./GameForm.css";


function GameForm(props) {
  const [name, setName] = useState("");
  const [universe, setUniverse] = useState("");
  const [date, setDate] = useState("");
  const history = useHistory();


  function handleChange(event) {
    let { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "universe":
        setUniverse(value);
        break;
      case "date":
        setDate(value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    addGame(name, universe, date);
    props.getGame(props.game);
    history.push('/games');

    setName("");
    setUniverse("");
    setDate("");
  }


  function addGame(name, universe, date) {
    let newGame = { name, universe, date };
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGame)
    };

    fetch("/games", options)
      .catch(err => {
        console.log("error!", err.message);
      });
  }

  return (
    <div >
      <h2 className="Title">Create a new game</h2>

      <form 
        className="GameForm"
        onSubmit={handleSubmit}>

        <label 
        className = "FormInputs"
        >
          Name of the adventure
          <input
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label
        className = "FormInputs"
        >
          Universe or system
          <input
            name="universe"
            type="text"
            value={universe}
            onChange={handleChange}
          />
        </label>

        <label
        className = "FormInputs"
        >
          Date
          <input
            name="date"
            type="date"
            value={date}
            onChange={handleChange}
          />
        </label>

        <button 
        type="submit"
        className="button"
        >
          Submit
        </button>

      </form>
    </div>
  );
}

export default GameForm;
