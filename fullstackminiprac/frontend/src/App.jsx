import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import './App.css'


const App = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Frontend app</h1>
      <div>
        <p>{`Jokes: ${jokes.length}`} </p>
      </div>
      {jokes.map((lines) => {
        return (
          <div key={lines.id}>
            <h3>{lines.title}</h3>
            <p>{lines.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
