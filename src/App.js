import MenuIcon from "@mui/icons-material/Menu";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <!-- Sidebar --> */}
        <MenuIcon className="d-lg-none" />
        <aside className="container__sidebar">
          <div class="list-group">
            {/* <MenuIcon /> */}

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
