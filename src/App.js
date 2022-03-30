import React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
//import NavBarBoot from './NavBarBoot';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
//import Container from 'react-bootstrap/Container';
import Home from './pages/Home';
import Seasons from './pages/Seasons';
import CastDiversity from './pages/CastDiversity'
import SeasonData from './components/SeasonData';
import ContestantsList from './components/ContestantsList';
import ContestantData from './pages/ContestantData';
//import "bootstrap/dist/css/bootstrap.min.css";
import { StyledEngineProvider } from '@mui/material/styles';
//import ButtonAppBar from './NavBar';
import NavBarBoot from './NavBarBoot';
import NavBarMUI from './NavBarMUI';
import './App.css';

function App() {
  return (
    <StyledEngineProvider injectFirst>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Router>
        <NavBarMUI/>
        <Switch>
          <Route path='/' exact component={CastDiversity} />
          <Route path='/data' exact component={Seasons} />
          <Route path='/seasons' exact component={Seasons} />
          <Route path="/seasons/data/:id" exact component={SeasonData} />
          <Route path="/contestants" exact component = {ContestantsList} />
          <Route path="/contestants/data/:id" exact component = {ContestantData} />
        </Switch>
      </Router>
    </LocalizationProvider>
    </StyledEngineProvider>
  );
}

export default App;
