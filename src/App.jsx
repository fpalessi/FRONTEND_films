import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Films from "./pages/Films";
import Pagination from "./pages/Pagination";
import AddFilm from "./pages/AddFilm";
import EditFilm from "./pages/EditFilm";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route exact path="/" element={<Films />}></Route>
          <Route path="/paginated" element={<Pagination />}></Route>
          <Route path="/film/add" element={<AddFilm />}></Route>
          <Route path="/film/edit/:id" element={<EditFilm />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
