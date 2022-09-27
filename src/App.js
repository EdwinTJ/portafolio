import "./App.css";
import linkedin from "./Images/linkedin.svg";
import gitHub from "./Images/github.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          href="https://www.linkedin.com/in/edwin-silvestre/"
          target="_blank"
          rel="noopener"
        >
          <img src={linkedin} alt="linkedin" />
          Linkedin Profile
        </a>
        <a href="https://github.com/EdwinTJ" target="_blank" rel="noopener">
          <img src={gitHub} alt="linkedin" />
          Linkedin Profile
        </a>

        <p>Site Under Construction</p>
      </header>
    </div>
  );
}

export default App;
