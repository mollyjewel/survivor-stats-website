import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Seasons from 'pages/Seasons'
import CastDiversity from 'pages/CastDiversity'
import SeasonData from 'components/seasonData/SeasonData'
import ContestantsList from 'components/ContestantsList'
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
          <Route path='/' exact component={CastDiversity} />
          <Route path='/data' exact component={Seasons} />
          <Route path='/seasons' exact component={Seasons} />
          <Route path="/seasons/data/:id" exact component={SeasonData} />
          <Route path="/contestants" exact component = {ContestantsList} />
          <Route path="/contestants/data/:id" exact component = {ContestantData} />
          <Route path="/signin" exact component = {SignIn} />
        </Switch>
      </Router>
    </LocalizationProvider>
    </StyledEngineProvider>
  )
}

export default App
