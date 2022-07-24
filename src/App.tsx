import './App.css';
import Profile from "./Profile";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div>User List
          </div>
          <Profile/>
        </div>
        <div>
          <LoginButton/>
          <LogoutButton/>
        </div>
      </header>
    </div>
  );
}

export default App;
