import React from "react";
import RecommendItems from "./RecommendItems";

const Movies = [
  {
    img: "https://facts.net/wp-content/uploads/2023/06/46-facts-about-the-movie-the-shawshank-redemption-1687241293.jpeg",
    year: "1994",
    type: "Movie",
    name: "The Shawshank Redemption",
  },
  {
    img: "https://media.proprofs.com/images/QM/user_images/1826446/1497268850.jpg",
    year: "1972",
    type: "Movie",
    name: "The Godfather",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH4eoWNyVjMig3c0vAfzFuDc8GvxP_tF7WJA&usqp=CAU",
    year: "2008",
    type: "Movie",
    name: "The Dark Knight",
  },
  {
    img: "https://prdaficalmjediwestussa.blob.core.windows.net/images/2022/05/AFIMC_SCHINDLERS-LIST_4.jpg",
    year: "1993",
    type: "Movie",
    name: "Schindler's List",
  },
  {
    img: "https://m.media-amazon.com/images/S/pv-target-images/949dc08db84df94831890d04c8c8d1b9a58e786629d1e73eaceba892c88abfed._UR1920,1080_.jpg",
    year: "1957",
    type: "Movie",
    name: "12 Angry Men",
  },
  {
    img: "https://www.uptvs.com/wp-contents/uploads/2020/09/The-Godfather-Part-II-1974.jpg",
    year: "1974",
    type: "Movie",
    name: "The Godfather Part II",
  },
  {
    img: "https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/2873590/5912999/MOVGD4786__56153.1679566167.jpg?c=2",
    year: "2003",
    type: "Movie",
    name: "The Lord of the Rings: The Return of the King",
  },
  {
    img: "https://m.media-amazon.com/images/M/MV5BMTc5Njg5Njg2MV5BMl5BanBnXkFtZTgwMjAwMzg5MTE@._V1_.jpg",
    year: "1994",
    type: "Movie",
    name: "Pulp Fiction",
  },
];
export default function Recommended() {
  return (
    <>
      <div className="m-7">
        <p className="text-2xl mt-6 font-semibold">Recommended for you</p>
        <div className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-row grid mt-10 gap-7">
          {Movies.map((data) => (
            <div key={data.details} className="">
              <a href="#">
                <RecommendItems
                  img={data.img}
                  year={data.year}
                  type={data.type}
                  name={data.name}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
