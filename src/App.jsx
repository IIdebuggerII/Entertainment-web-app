import "./App.css";
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
      </div>
    </>
  );
}

export default App;
