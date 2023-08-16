import "./App.css";
import Recommended from "./component/Recommended";
import Scroller from "./component/Scroller";
import SearchBar from "./component/SearchBar";
import Header from "./component/Header";

function App() {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:p-5 ">
        <div className="bg-darkblue w-full lg:rounded-3xl lg:max-h-screen lg:w-1/12 lg:py-6 ">
          <Header />
        </div>
        <div className="lg:m-5 lg:w-11/12 ">
          <SearchBar />
          <Scroller />
          <Recommended />
        </div>
      </div>
    </>
  );
}

export default App;
