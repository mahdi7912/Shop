
import Navabr from "./components/Navbar";
import Feed from "./components/Feed";
import Add from "./components/Add";



function App() {
  return (
    <div className="scrollbar" id="style-1" >
      <div className="force-overflow">
        <Navabr />

        <Feed />

        <Add />
      </div>
    </div>
  );
}

export default App;
