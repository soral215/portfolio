import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import HistoryPage from "./Pages/HistoryPage/HistoryPage";
import HeadComponent from "./Component/HeadComponent/HeadComponent";
import SideComponent from "./Component/SideComponent/SideComponent";

function App() {
  return (
    <Router>
      <div>
        <SideComponent/>
        <HeadComponent/>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/history" component={HistoryPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
