import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlayerPage from "./pages/PlayerPage";
import SuddenDeath from "./pages/SuddenDeath";
import Waiting from "./pages/Waiting";
import { ContextProvider } from "./context/Context";
import NotFound from "./pages/NotFound";
import ScorePage from "./pages/ScorePage";

function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/players/:playerId" element={<PlayerPage />} />
            <Route path="/suddendeath" element={<SuddenDeath />} />
            <Route path="/waiting" element={<Waiting />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/scorepage/:playerId" element={<ScorePage />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
