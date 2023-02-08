import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Findbar from "./Findbar";
import ChooseLevel from "./ChooseLevel";
import FindmePage from "./FindmePage";
import Hiscores from "./Hiscores";
import Footer from "./Footer";

function App() {
  const [stage, setStage] = useState("");
  const [choosing, setChoosing] = useState(true);

  return (
    <div className="app">
      <Header />
      <Findbar stage={stage} />
      <div className="gameWindow">
        <ChooseLevel setStage={setStage} choosing={choosing} />
        <FindmePage stage={stage} choosing={choosing} />
        <Hiscores choosing={choosing} setChoosing={setChoosing} />
      </div>

      <Footer />

      <Link to="/developer">Developer toolz</Link>
    </div>
  );
}

export default App;
