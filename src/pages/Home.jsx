import logo from '../logo.svg';
import '../App.css';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MapChart from '../components/MapChart';
import GenderBarGraph from '../components/GenderBarGraph';
import RaceBarGraph from '../components/RaceBarGraph';
import SexOrientBarGraph from '../components/SexOrientBarGraph';
import DataVizItem from '../components/DataViz/DataVizItem';

function Home() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <MapChart/>
        <DataVizItem title={'Gender Diversity'} content={<GenderBarGraph/>} />
        <DataVizItem title={'Race Diversity'} content={<RaceBarGraph/>} />
        <DataVizItem title={'Sexual Orientation Diversity'} content={<SexOrientBarGraph/>} />
      </Container>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="contained">Hello World</Button>
      </header>
    </div>
  );
}

export default Home;
