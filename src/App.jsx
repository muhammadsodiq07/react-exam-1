import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Location from "./components/Location/Location";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="Location/:id" element={<Location />} />
      </Routes>
    </>
  );
}

export default App;
