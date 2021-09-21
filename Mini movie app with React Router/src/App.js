import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home.js';
import Movie from './Movie.js'


function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/movie/:movieId' component={Movie}></Route>
    </div>
    </Router>
  );
}

export default App;

