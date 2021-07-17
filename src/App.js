import React, { useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import PersonsList from "./Components/PersonsList/PersonsList";
import Edit from "./Components/Edit/Edit";
import Person from "./Components/Person/Person";
import Cursor from "./Components/Cursor/Cursor";
import Header from "./Components/Header/Header";
function App() {
  const [peopleList, setPeopleList] = useState([]);
  const [active, setActive] = useState();

  return (
    <HashRouter>
      <Cursor />
      <div className="container">
        <Header />
        <PersonsList
          setPeopleList={setPeopleList}
          peopleList={peopleList}
          active={active}
        />

        <Switch>
          <Route path="/edit/:personID">
            <Edit peopleList={peopleList} setPeopleList={setPeopleList} />
          </Route>
          <Route exact path="/details/:personID">
            <Person peopleList={peopleList} setActive={setActive} />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
