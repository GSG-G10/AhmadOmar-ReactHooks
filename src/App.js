import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  
  return (
    <Router>
    <div className="App">
    <NavBar />
      <div className="container">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/pages/Favorite">
          <Favorite />
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;