import { BrowserRouter, Routes, Route } from "react-router-dom";

import ListPage from "./pages/List.page";
import CoinPage from "./pages/Coin.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/coin/:id" element={<CoinPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
