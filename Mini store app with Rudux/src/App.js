import './App.css';
import FrozenDept from './components/FrozenDept.js';
import MeatDept from './components/MeatDept';
import ProduceDept from './components/ProduceDept.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Main from './components/Main.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/' component={NavBar} />
        <Route path='/main' component={Main} />
        <Route path='/frozen-dept' component={FrozenDept} />
        <Route path='/produce-dept' component={ProduceDept} />
        <Route path='/meat-dept' component={MeatDept} />
      </div>
    </Router>
  );
}

export default App;
