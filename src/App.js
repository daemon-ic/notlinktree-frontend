import { useState } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {page === "home" && <Home setPage={setPage} />}
      {page === "projects" && <Projects setPage={setPage} />}
    </>
  );
}

export default App;
