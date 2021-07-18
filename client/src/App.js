import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminRouter from "./Admin/router"

import Home from './Main/Home'
import About from './Main/About'
import Skills from './Main/Skills'
import Work from './Main/Work'
import Blog from './Main/Blog'
import Contact from './Main/Contact'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/admin" component={ AdminRouter } />
        <Route exact path="/admin/*" component={ AdminRouter } />

        <Route exact path="/about" component={ About } />
        <Route exact path="/about/*" component={ About } />

        <Route exact path="/skills" component={ Skills } />
        <Route exact path="/skills/*" component={ Skills } />

        <Route exact path="/work" component={ Work } />
        <Route exact path="/work/*" component={ Work } />

        <Route exact path="/blog" component={ Blog } />
        <Route exact path="/blog/*" component={ Blog } />

        <Route exact path="/contact" component={ Contact } />
        <Route exact path="/contact/*" component={ Contact } />

        <Route exact path="/" component={ Home } />
        <Route exact path="/*" component={ Home } />

      </Switch>
    </Router>
  )
}

export default App;
