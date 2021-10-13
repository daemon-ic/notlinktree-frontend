import { useState } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Unfinished from "./pages/Unfinished";
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
      {page === "unfinished" && <Unfinished setPage={setPage} />}
    </div>
  );
}

export default App;
