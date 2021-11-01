import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './components/layout';
import Gallery from './pages/gallery';
import Home from './pages/home';


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
        </Switch>
      </Layout>

    </Router>
  );
}

export default App;