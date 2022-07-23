import './App.css';
import MyComponent from "./MyComponent";

function doStuff() {
  console.log("there")
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <MyComponent test="test"/>
        </div>
        <button onClick={doStuff}>
          Do something!
        </button>
      </header>
    </div>
  );
}

export default App;
