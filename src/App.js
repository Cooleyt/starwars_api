import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Main from './views/Main';
import SingleCharacter from './views/SingleCharacter';
import Error from './Components/Error';


function App(){
  const [searchType, setSearchType] = useState();
  const [searchID, setSearchID] = useState();

  
  return (
    <div className="App">
    <BrowserRouter>
    <div id="header">
      <Link to="/">Main</Link>
      <Link to="/character">Single Character</Link>
    </div>
        <Switch>
          <Route exact path ="/">
            <Main />
          </Route>

          <Route exact path ="/:type/:id">
            <SingleCharacter />
          </Route>
        </Switch>
    </BrowserRouter>

    </div>
  );
}

export default App;