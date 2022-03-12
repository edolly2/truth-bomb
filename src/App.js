import "./App.css";

import Header from "./components/Header";
import { useState } from "react";

function App(props) {
  const [pageTitle, setPageTitle] = useState("");
  return (
    <div className="App">
      <Header />
      <main></main>
    </div>
  );
}

export default App;
