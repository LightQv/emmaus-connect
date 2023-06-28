import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Calculator from "./pages/Calculator";
import FAQ from "./pages/FAQ";
import Parameters from "./pages/Parameters";
import Users from "./pages/Users";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/calc" element={<Calculator />} />
        <Route path="/faq" element={<FAQ />} />
        <Route>
          <Route path="/params" element={<Parameters />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
