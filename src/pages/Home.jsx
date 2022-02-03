import logo from '../logo.svg';
import '../App.css';
import Button from '@mui/material/Button';
import MapChart from '../components/MapChart';

function Home() {
  return (
    <div className="App">
      <MapChart/>
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
