import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlayerPage from "./pages/PlayerPage";
import InGame from "./pages/InGame";
import BeforeGame from "./pages/BeforeGame";
import EndGame from "./pages/EndGame";
import SuddenDeath from "./pages/SuddenDeath";
import Waiting from "./pages/Waiting";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/players/:id" element={<PlayerPage />} />
          <Route path="/ingame" element={<InGame />} />
          <Route path="/beforegame" element={<BeforeGame />} />
          <Route path="/endgame" element={<EndGame />} />
          <Route path="/suddendeath" element={<SuddenDeath />} />
          <Route path="/waiting" element={<Waiting />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
