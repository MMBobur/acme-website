import './App.css';
import Home from './page/home';
import Card from './containers/cards/index.jsx'
import Local from './containers/local';

function App() {
  return (
    <div >
      <Home /> 
      <Card />
      <Local/>
    </div>
  );
}

export default App;
