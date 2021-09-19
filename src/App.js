import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=7pcr6jlhvvpU4ZZKaPhBACKfDn1bP9ZXd61Uab1h"
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
