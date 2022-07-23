import './App.css';
import MyComponent from "./MyComponent";

function doStuff() {
  console.log("there")
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>User List</>
        <div>
          <MyComponent/>
        </div>
        <button onClick={doStuff}>
          Do something!
        </button>
      </header>
    </div>
  );
}

export default App;
