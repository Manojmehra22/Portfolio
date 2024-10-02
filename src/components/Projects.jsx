import React, { useEffect } from "react";
import TypingGame from "/typing_game.png";
import TodoList from "/todolist.png";
import Tictoe from "/tictactoe.png";
import WeatherApp from "/weatherapp.png";
import Moviemag from "/Moviemag.png";
import NETFLIX from "/NETFLIX.png";
import Recipe from "/Recipe.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <>
      <div
        data-aos="zoom-in"
        name="Projects"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-16  "
      >
        <h1 className="text-xl text-[#006FDD]  mb-5 md:ml-[150px]">Projects</h1>

        <div className="flex flex-wrap md:ml-[150px] md:mr-[150px] ">
          <div className="lg:w-1/3 sm:w-1/2 p-4  ">
            <div className="flex relative h-[200px] ">
              <img
                alt="Movieimg"
                className="absolute inset-0 h-full w-full object-cover object-center border-solid border-4 border-black"
                src={Moviemag}
              />
              <div className="px-8 py-2 relative z-10 w-full border-4 border-gray-900 bg-[#EEE7F6] opacity-[0] hover:opacity-100">
                <h1 className="tracking-widest text-lg title-font font-medium text-indigo-600 mb-1">
                  Movie Mag
                </h1>
                <p className="title-font text-sm font-medium text-gray-900 mb-3">
                  This is movie search App with this you can search any movie
                  and this created with reactjs and API
                </p>
                <div className="flex justify-around pr-[50px] mt-[20px] gap-x-10">
                  <a
                    href="https://github.com/Manojmehra22/Moviemag"
                    target="_blank"
                  >
                    <button className="border-solid border-2 border-indigo-600 h-[50px] w-[90px] hover:bg-indigo-600 hover:text-white rounded-md">
                      Github
                    </button>
                  </a>
                  <a href="https://moviemag-ruby.vercel.app/" target="_blank">
                    <button className="h-[50px] w-[90px] text-white bg-indigo-600 hover:bg-white hover:border-solid border-2 border-indigo-600 hover:text-black rounded-md">
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4 ">
            <div className="flex relative h-[200px] ">
              <img
                alt="Recipe img"
                className="absolute inset-0 h-full w-full object-cover object-center border-solid border-4 border-black"
                src={Recipe}
              />
              <div className="px-8 py-2 relative z-10 w-full border-4 border-gray-900 bg-[#EEE7F6] opacity-[0] hover:opacity-100">
                <h1 className="tracking-widest text-lg title-font font-medium text-indigo-600 mb-1">
                  Recipe search App
                </h1>
                <p className="title-font text-sm font-medium text-gray-900 mb-3">
                  This is Recipe search App with this you can search your meal
                  and many thoughts and this created with React.js and APIs.
                </p>
                <div className="flex justify-around pr-[50px] mt-[10px] gap-x-10">
                  <a
                    href="https://github.com/Manojmehra22/Food-recipe-App"
                    target="_blank"
                  >
                    <button className="border-solid border-2 border-indigo-600 h-[50px] w-[90px] hover:bg-indigo-600 hover:text-white rounded-md">
                      Github
                    </button>
                  </a>
                  <a
                    href="https://food-recipe-app-snowy-five.vercel.app/"
                    target="_blank"
                  >
                    <button className="h-[50px] w-[90px] text-white bg-indigo-600 hover:bg-white hover:border-solid border-2 border-indigo-600 hover:text-black rounded-md">
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4  ">
            <div className="flex relative h-[200px]">
              <img
                alt="NETFLIX"
                className="absolute inset-0 h-full w-full object-cover object-center border-solid border-4 border-black "
                src={NETFLIX}
              />
              <div className="px-8 py-2 relative z-10 w-full border-4 border-gray-900 bg-[#EEE7F6] opacity-[0] hover:opacity-100">
                <h1 className="tracking-widest text-lg title-font font-medium text-indigo-600 mb-1">
                  Netflix Clone
                </h1>
                <p className="title-font text-sm font-medium text-gray-900 mb-3">
                  This is Netflix clone with this you can find your chill, place
                  and this built with HTML and CSS.
                </p>
                <div className="flex justify-around pr-[50px] mt-[10px] gap-x-10">
                  <a
                    href="https://github.com/Manojmehra22/Netflix-clone"
                    target="_blank"
                  >
                    <button className="border-solid border-2 border-indigo-600 h-[50px] w-[90px] hover:bg-indigo-600 hover:text-white rounded-md">
                      Github
                    </button>
                  </a>
                  <a
                    href="https://manojmehra22.github.io/Netflix-clone/"
                    target="_blank"
                  >
                    <button className="h-[50px] w-[90px] text-white bg-indigo-600 hover:bg-white hover:border-solid border-2 border-indigo-600 hover:text-black rounded-md">
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4 ">
            <div className="flex relative h-[200px]">
              <img
                alt="Todolistimg"
                className="absolute inset-0 h-full w-full object-cover object-center border-solid border-4 border-black"
                src={TodoList}
              />
              <div className="px-8 py-2 relative z-10 w-full border-4 border-gray-900 bg-[#EEE7F6] opacity-[0] hover:opacity-100">
                <h1 className="tracking-widest text-lg title-font font-medium text-indigo-600 mb-1">
                  To-Do list
                </h1>
                <p className="title-font text-sm font-medium text-gray-900 mb-3">
                  This is Todolist app with this you can add your task and many
                  thoughts and this built with React.js.
                </p>
                <div className="flex justify-around pr-[50px] mt-[10px] gap-x-10">
                  <a
                    href="https://github.com/Manojmehra22/Todo-list-app"
                    target="_blank"
                  >
                    <button className="border-solid border-2 border-indigo-600 h-[50px] w-[90px] hover:bg-indigo-600 hover:text-white rounded-md">
                      Github
                    </button>
                  </a>
                  <a
                    href="https://todo-list-app-sandy-alpha.vercel.app/"
                    target="_blank"
                  >
                    <button className="h-[50px] w-[90px] text-white bg-indigo-600 hover:bg-white hover:border-solid border-2 border-indigo-600 hover:text-black rounded-md">
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4  ">
            <div className="flex relative h-[200px]">
              <img
                alt="tictoe img"
                className="absolute inset-0 h-full w-full object-cover object-center border-solid border-4 border-black "
                src={Tictoe}
              />
              <div className="px-8 py-2 relative z-10 w-full border-4 border-gray-900 bg-[#EEE7F6] opacity-[0] hover:opacity-100">
                <h1 className="tracking-widest text-lg title-font font-medium text-indigo-600 mb-1">
                  Tic-Tac-Toe Game
                </h1>
                <p className="title-font text-sm font-medium text-gray-900 mb-3">
                  This is Tic tac toe a popular game with this you can play with
                  your friends
                </p>
                <div className="flex justify-around pr-[50px] mt-[10px] gap-x-10">
                  <a
                    href="https://github.com/Manojmehra22/Tic-Tac-Toe-Game"
                    target="_blank"
                  >
                    <button className="border-solid border-2 border-indigo-600 h-[50px] w-[90px] hover:bg-indigo-600 hover:text-white rounded-md">
                      Github
                    </button>
                  </a>
                  <a
                    href="https://tic-tac-toe-game-yr9z.vercel.app/"
                    target="_blank"
                  >
                    <button className="h-[50px] w-[90px] text-white bg-indigo-600 hover:bg-white hover:border-solid border-2 border-indigo-600 hover:text-black rounded-md">
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4  ">
            <div className="flex relative h-[200px]">
              <img
                alt="weather img"
                className="absolute inset-0 h-full w-full object-cover object-center border-solid border-4 border-black "
                src={WeatherApp}
              />
              <div className="px-8 py-2 relative z-10 w-full border-4 border-gray-900 bg-[#EEE7F6] opacity-[0] hover:opacity-100">
                <h1 className="tracking-widest text-lg title-font font-medium text-indigo-600 mb-1">
                  Weather forcast App
                </h1>
                <p className="title-font text-sm font-medium text-gray-900 mb-3">
                  Forecasting the weather involves record ongoing measure of
                  tempreature,pressure,precipation and it build with Reactjs and
                  APIs
                </p>
                <div className="flex justify-around pr-[50px] mt-[10px] gap-x-10">
                  <a
                    href="https://github.com/Manojmehra22/Weather-app"
                    target="_blank"
                  >
                    <button className="border-solid border-2 border-indigo-600 h-[50px] w-[90px] hover:bg-indigo-600 hover:text-white rounded-md">
                      Github
                    </button>
                  </a>
                  <a
                    href="https://weather-app-rust-nu-26.vercel.app/"
                    target="_blank"
                  >
                    <button className="h-[50px] w-[90px] text-white bg-indigo-600 hover:bg-white hover:border-solid border-2 border-indigo-600 hover:text-black rounded-md">
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
