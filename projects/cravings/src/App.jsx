import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;