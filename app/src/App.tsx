import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlayerPage from "./pages/PlayerPage";
import SuddenDeath from "./pages/SuddenDeath";
import Waiting from "./pages/Waiting";
import { ContextProvider } from "./context/Context";

function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/players/:playerId" element={<PlayerPage />} />
            <Route path="/suddendeath" element={<SuddenDeath />} />
            <Route path="/waiting" element={<Waiting />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
