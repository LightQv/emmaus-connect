import { Routes, Route } from "react-router-dom";
import RequireAuth from "./components/routes/RequireAuth";
import Login from "./pages/Login";
import "./App.css";
import Calculator from "./pages/Calculator";
import FAQ from "./pages/FAQ";
import Parameters from "./pages/Parameters";
import Users from "./pages/Users";

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Login />} />
      <Route path="/calc" element={<Calculator />} />
      <Route path="/faq" element={<FAQ />} />

      {/* Admin routes */}
      <Route element={<RequireAuth allowedRoles="Admin" />}>
        <Route path="/params" element={<Parameters />} />
        <Route path="/users" element={<Users />} />
      </Route>
    </Routes>
  );
}

export default App;
