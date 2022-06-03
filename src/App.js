import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Seasons from 'pages/Seasons'
import Home from 'pages/Home'
import CastDiversity from 'pages/CastDiversity'
import SeasonData from 'components/seasonData/SeasonData'
import Contestants from 'pages/Contestants'
import ContestantData from 'pages/ContestantData'
import SignIn from 'pages/SignIn'
//import "bootstrap/dist/css/bootstrap.min.css"
import { StyledEngineProvider } from '@mui/material/styles'
import NavBarMUI from 'components/NavBarMUI'
import 'App.css'

function App() {
  return (
    <StyledEngineProvider injectFirst>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Router>
        <NavBarMUI/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/data' exact component={Seasons} />
          <Route path='/data/seasons' exact component={Seasons} />
          <Route path="/data/seasons/:id" exact component={SeasonData} />
          <Route path="/data/contestants" exact component = {Contestants} />
          <Route path="/data/contestants/:id" exact component = {ContestantData} />
          <Route path="/analysis/castdiversity" exact component = {CastDiversity} />
          <Route path="/signin" exact component = {SignIn} />
        </Switch>
      </Router>
    </LocalizationProvider>
    </StyledEngineProvider>
  )
}

export default App
