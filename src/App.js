import Contact from "./components/Contact";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Contact name = "Vic" avatarUrl = "https://iknowyourmeme.files.wordpress.com/2016/04/happy-sad-frog-05.jpg?w=816" isOnline = {true} />
      </header>
    </div>
  );
}

export default App;
