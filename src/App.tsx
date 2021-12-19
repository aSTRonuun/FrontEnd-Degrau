import React from 'react';

import { Container } from "@mui/material/";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainMenu from './components/AppBar/MainMenu';
import CarouselOfImages from './components/CorouselOfImages/Corousel';
import ListOfTeachers from './components/TeachersSection/ListOfTeachers';
import Localization from './components/Map/Localization';
import SectionCall from './components/CallToAction/SectionCall';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainMenu />
          <CarouselOfImages/>
          <Container maxWidth="lg">
            <ListOfTeachers/>
            <Localization/>
            <SectionCall/>
          </Container>
          <Footer/>
        </Route>
      </Switch>
      <Route path="/login">
        <Login/>
      </Route>
    </Router>
  );
}

export default App;
