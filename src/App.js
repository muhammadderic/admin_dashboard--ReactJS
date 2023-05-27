import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import User from "./pages/User";
import Topbar from "./components/Topbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Topbar />}>
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
