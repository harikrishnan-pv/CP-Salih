import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './components/layout';
import ScrollToTop from './components/scroll';
import Blog from './pages/blog';
import Gallery from './pages/gallery';
import Home from './pages/home';
import Profile from './pages/profile';



function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/gallery">
            <Gallery/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/activities">
            <Blog/>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;