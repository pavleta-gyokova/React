import Navigation from "./components/Navigation/Navigation";
import CreateProperty from "./pages/create-property/CreateProperty";
import Home from "./pages/homepage/Home";
import Detail from "./pages/listing-detail/Detail";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/detail' element={<Detail />} />
          <Route exact path='/create' element={<CreateProperty />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
