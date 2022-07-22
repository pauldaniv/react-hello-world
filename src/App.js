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
          <MyComponent name="test"/>
          <button onClick={doStuff}>
            Do smthn
          </button>
        </div>

      </header>
    </div>
  );
}

export default App;
