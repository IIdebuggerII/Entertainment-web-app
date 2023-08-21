import React from "react";

export default function Scrolllitem() {
  return (
    <div className="min-w-[300px]  mr-8 relative mb-4  ">
      
      <img
        className="w-full rounded-lg "
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqO2lgR5vlT0YIsnkHTynIJkTfU4FoegKiwRA0hexJ&s"
        alt=""
      />
      <div className="visible lg:opacity-0 lg:hover:opacity-100 duration-75 cursor-pointer">
      <span className="absolute top-2 right-3 z-10 bg-darkblue opacity-90 p-2 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
          />
        </svg>
      </span>
      <div className="absolute w-full bg-gradient-to-tr rounded-lg from-gray-800  to-transparent  top-0 h-full   "></div>
      <div className="w-1/3 absolute bottom-2 left-4 flex flex-col">
        <div className="flex flex-row items-baseline">
          <p className="opacity-40 text-xs">2019 </p>
          <span className="opacity-60 text-xl scale-150 mx-2 relative -top-2">
            {" "}
            .
          </span>
          <p className="opacity-40 text-xs">Movie </p>
          <p className="opacity-40 text-xs hidden"> PG</p>
        </div>
        <div>
          <p>dsadsd</p>
        </div>
      </div>
      <span className="absolute right-3 bottom-4 bg-darkblue  rounded-full px-3 ">
        PG
      </span>
      </div>
    </div>
  );
}
