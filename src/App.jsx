import "./App.css";
import Recommended from "./component/Recommended";
import Scroller from "./component/Scroller";
import SearchBar from "./component/SearchBar";
import Header from "./component/header";

function App() {
  return (
    <>
      <div className="bg-darkblue w-full">
        <Header />
      </div>
      <div className="m-5">
        <SearchBar />
        <Scroller />
        <Recommended/>
      </div>
    </>
  );
}

export default App;
