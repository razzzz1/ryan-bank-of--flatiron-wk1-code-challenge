import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Transaction from "./components/Transactions";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Transaction />
      
    </div>
  );
}

export default App;
