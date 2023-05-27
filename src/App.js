import { BrowserRouter, Route, Routes } from "react-router-dom";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import UserList from "./pages/UserList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Topbar />}>
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<UserList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
