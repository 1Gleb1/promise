import Header from "./components/Header";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
import Locations from "./pages/Locations";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LocationsId from "./pages/LocationsId";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/characters" element={<Characters />} />
        <Route exact path="/episodes" element={<Episodes />} />
        <Route exact path="/locations" element={<Locations />} />
        <Route exact path="/location/:id" element={<LocationsId />} />
        <Route path="*" element={<Characters />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
