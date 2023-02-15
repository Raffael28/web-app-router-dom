import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/vite"
          element={
            <>
              <h1>Vite</h1>
              <div>
                <a href="https://vitejs.dev" target="_blank">
                  <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
              </div>
            </>
          }
        />

        <Route
          path="/react"
          element={
            <>
              <h1>React</h1>
              <div>
                <a href="https://reactjs.org" target="_blank">
                  <img
                    src={reactLogo}
                    className="logo react"
                    alt="React logo"
                  />
                </a>
              </div>
            </>
          }
        />
      </Routes>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Link to={"/react"}>
          <p>React</p>
        </Link>
        <Link to={"/vite"}>
          <p>Vite</p>
        </Link>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
