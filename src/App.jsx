import './App.css';
import AppleCard from './components/AppleCard';

function App() {
  return (
    <div className="App">
      <h1>Apple Card App</h1>
      <hr></hr>
      <AppleCard firstName="Golden" lastName="Delicious" quantity={ 0 } color="Golden-Yellow"/>
      <hr></hr>
      <AppleCard firstName="Honey" lastName="Crisp" quantity={ 0 } color="Red-Yellow"/>
      <hr></hr>
      <AppleCard firstName="Granny" lastName="Smith" quantity={ 0 } color="Green"/>
      <hr></hr>
      <AppleCard firstName="Fuji" lastName="Apple" quantity={ 0 } color="Red-Orange"/>
      <hr></hr>
      <AppleCard firstName="McIntosh" lastName="Red" quantity={ 0 } color="Red-Green"/>
      <hr></hr>
    </div>
  );
}

export default App;
