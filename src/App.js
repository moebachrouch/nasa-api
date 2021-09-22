import "./App.css";
import React, { useState, useEffect } from "react";
require("dotenv").config();

console.log(process.env);

function App() {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const url = 'https://api.nasa.gov/planetary/apod';
  const API_KEY = process.env.REACT_APP_NASA_API_KEY;

  useEffect(() => {
    fetch(
      `${url}?api_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then(
        (json) => {
          setIsLoaded(true);
          setItems(json);
        },
        (error) => {
          setIsLoaded(true);
          setItems(error);
        }
      );
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <ul>
          <li key={items.id}>
            <img src={items.url} alt={items.title} />
            <p>{items.title}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
