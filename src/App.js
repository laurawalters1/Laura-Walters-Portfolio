import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <!-- Sidebar --> */}
        <aside className="container__sidebar">
          <div class="list-group">
            <li>Option one</li>
            <li>Option one</li>
            <li>Option one</li>
          </div>
        </aside>

        {/* <!-- Main --> */}
        <main class="container__main">...</main>
      </div>
    </div>
  );
}

export default App;
