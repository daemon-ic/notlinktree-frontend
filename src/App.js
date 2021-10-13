import { useState } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center ",
        height: "100vh",
        width: "100vw",
      }}
    >
      {page === "home" && <Home setPage={setPage} />}
      {page === "projects" && <Projects setPage={setPage} />}
    </div>
  );
}

export default App;
