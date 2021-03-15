import './App.css';
import Popular from './Popular';
import Home from './Home';
import TopRated from './TopRated';
import Upcoming from './Upcoming';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/popular">Popular movies</Link>
            </li>
            <li>
              <Link to="/toprated">Top Rated movies</Link>
            </li>
            <li>
              <Link to="/upcoming">Upcoming movies</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/popular">
            <Popular />
          </Route>
          <Route path="/toprated">
            <TopRated />
          </Route>
          <Route path="/upcoming">
            <Upcoming />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
