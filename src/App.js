import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './components/layout';
import Gallery from './pages/gallery';
import Home from './pages/home';
import Profile from './pages/profile';


function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/gallery">
            <Gallery/>
          </Route>
          <Route exact path="/profile">
            <Profile/>
          </Route>
        </Switch>
      </Layout>

    </Router>
  );
}

export default App;