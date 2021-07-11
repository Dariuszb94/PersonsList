import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";
import "./App.scss";
import PersonsList from "./Components/PersonsList/PersonsList";
import Edit from "./Components/Edit/Edit";
import Person from "./Components/Person/Person";

function App() {
  const [peopleList, setPeopleList] = useState([]);

  return (
    <HashRouter>
      <div className="body-layout">
        <PersonsList setPeopleList={setPeopleList} peopleList={peopleList} />

        <Switch>
          <Route path="/edit/:personID">
            <Edit peopleList={peopleList} setPeopleList={setPeopleList} />
          </Route>
          <Route exact path="/details/:personID">
            <Person peopleList={peopleList} />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
