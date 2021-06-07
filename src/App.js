
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Loadable from 'react-loadable'
import Login from "./login/login.js"
import Nav from "./nav/nav.js"
import Resume from "./resume/resume.js"
import Directory from "./directory/directory.js"
import Self from "./self/self.js"
import Start from './start/start';
import Notfound from './notfound/notfound';
const Loginable=Loadable({loader:()=>import("./login/login.js"),
loading:Login,});
const Directoryable=Loadable({loader:()=>import("./directory/directory.js"),
loading:Directory,});
const Resumeable=Loadable({loader:()=>import("./resume/resume.js"),
loading:Resume,});
const Selfable=Loadable({loader:()=>import("./self/self.js"),
loading:Self,});
const Startable=Loadable({loader:()=>import("./start/start.js"),
loading:Start,});
const Notfoundable=Loadable({loader:()=>import("./notfound/notfound.js"),
loading:Notfound,});
function App() {
  return (
   <Router>
   <Switch>
     <Route  exact path="/">
       <Startable/>
       </Route>
    <Route path="/directory">
      <Directoryable/>
      </Route>
      <Route path="/self">
      <Selfable/>
      </Route>
     <Route  path="/login">
      <Loginable/>
     </Route>
     <Route  path="/nav">
      <Nav/>
     </Route>
     <Route path="/resume">
       <Resumeable/>
       </Route>
       <Route path="/notfound">
       <Notfoundable/>
       </Route>
      
      <Redirect to="/notFound" />

       
   </Switch>

   </Router>
  );
}

export default App;
