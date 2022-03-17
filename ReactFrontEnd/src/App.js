import React, { useState, useEffect } from "react";

export default function App() {
  const [list, setList] = useState(true);
  const [card, setCard] = useState(false);
  const [colors, setPlayers] = useState([]);
  const [color, setColor] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/colors/list")
      .then((response) => response.json())
      .then((responseJson) => {
        setPlayers(responseJson.data);
      });
  }, []);

  let showCard = (id) => {
    fetch(`http://localhost:3001/colors/${id}`)
      .then((response) => response.json())
      .then((responseJson) => {
        setColor(responseJson.data);
        setList(false);
        setCard(true);
      });
  };

  let showList = () => {
    setCard(false);
    setList(true);
  };

  return (
    <div className="container">
      {list ? (
        <div className="list-group">
          <h3>Select your color:</h3>
          {colors.map((color) => (
            <li
              onClick={() => showCard(color._id)}
              className="list-group-item list-group-item-action"
            >
              {color.name}
            </li>
          ))}
        </div>
      ) : null}
      {card ? (
        <div class="card" style={{ width: "18rem", background: color.hexvalue }}>
          <div class="card-body">
            <h5 class="card-title">{color.name}</h5>
            <p class="card-text">{color.hexvalue}</p>
            <div onClick={() => showList()} class="btn btn-primary">
              Back
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
