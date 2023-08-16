import React from "react";

export default function SearchBar() {
  return (
    <>
      <div className=" flex flex-row m-7">
        <button className="  pr-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 scale-125"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <input
          type="text"
          className="w-11/12 bg-dark pl-1 on focus:outline-none text-lg text-red-400"
          placeholder="Search for movies or TV series"
        />
      </div>
    </>
  );
}
