import { BrowserRouter, Route, Routes } from "react-router-dom";
import Topbar from "./components/Topbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Topbar />}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
