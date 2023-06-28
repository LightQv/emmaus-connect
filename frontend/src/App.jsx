import { Routes, Route } from "react-router-dom";
import RequireAuth from "./components/routes/RequireAuth";
import Login from "./pages/Login";
import "./App.css";

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Login />} />

      {/* Admin routes */}
      <Route element={<RequireAuth allowedRoles="Admin" />}>
        <Route path="calc" />
      </Route>
    </Routes>
  );
}

export default App;
