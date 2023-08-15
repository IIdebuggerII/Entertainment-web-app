import React from "react";
import Scrolllitem from "./scrolllitem";

export default function Scroller() {
  return (
    <div className="mt-5">
      <p className="text-2xl font-light">Trending</p>
      <div className=" container overflow-auto">
        <div className="flex flex-row  ">
          <Scrolllitem/>
          <Scrolllitem/>
          <Scrolllitem/>
          <Scrolllitem/>
          <Scrolllitem/>
          <Scrolllitem/>
          <Scrolllitem/>
        </div>
      </div>
    </div>
  );
}
