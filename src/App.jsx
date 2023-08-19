import "./App.css";
import Recommended from "./component/Recommended";
import Scroller from "./component/Scroller";
import SearchBar from "./component/SearchBar";
import Header from "./component/Header";

function App() {
  return (
    <>
      <div className="lg:grid lg:grid-cols-12 lg:pl-5 lg:pt-5 flex flex-col">
        <div className="bg-darkblue lg:col-span-1 lg:rounded-3xl  w-full lg:h-[96vh] ">
          <Header />
        </div>
        <div className="lg:m-12 lg:w-11/12 lg:col-span-11">
          <SearchBar />
          <Scroller />
          <Recommended />
        </div>
      </div>
    </>
  );
}

export default App;
