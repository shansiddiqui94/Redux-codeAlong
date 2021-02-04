import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import DashboardPage from './pages/DashboardPage'
import PostsPage from './pages/PostPage'
function App() {

  return <Router>
    <Switch>
      <Route exact path="/" components={DashboardPage}/>
      <Route exact path-"/posts" components={PostsPage}/>
      <Redirect to="/" />
    
    </Switch>
  </Router>
}

export default App;
