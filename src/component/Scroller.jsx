import React from "react";
import Scrolllitem from "./scrolllitem";

export default function Scroller() {
  return (
    <div className="mt-6">
      <p className="text-2xl font-light">Trending</p>
      <div className=" w-full overflow-auto mt-6">
        <div className="flex flex-row  ">
          <Scrolllitem />
          <Scrolllitem />
          <Scrolllitem />
          <Scrolllitem />
          <Scrolllitem />
          <Scrolllitem />
          <Scrolllitem />
        </div>
      </div>
    </div>
  );
}
