import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="flex bg-cover h-screen" style={{backgroundImage: "url('/2btestwallpaper.jpeg')"}}>
      <div className="w-5/12 flex flex-col items-center justify-center">
        <div className="block w-6/12">
          {/* <div className="hexagon"></div> */}
          <img class="rounded-full border-solid border-white border-4" src="/headshot.jpg" />
        </div>

        <div className="block w-6/12 text-center mt-8">
          <h1 className="text-6xl text-white">Dan Frenette</h1>
        </div>
      </div>

      <div className="w-7/12 flex flex-col items-center justify-center">
        <nav className="bg-transparent w-4/5 flex justify-between">
          <div className="inline-block w-1/3 border-solid border-white border-l-4 border-t-4 text-center ml-8">
            <a href="#" class="px-2 py-1 h-10 block font-semibold text-white hover:bg-gray-300">test link</a>
          </div>
          <div className="inline-block w-1/3 border-solid border-white border-l-4 border-t-4 text-center ml-8">
            <a href="#" class="px-2 py-1 h-10 block font-semibold text-white hover:bg-gray-300">test link</a>
          </div>
          <div className="inline-block w-1/3 border-solid border-white border-l-4 border-t-4 text-center ml-8">
            <a href="#" class="px-2 py-1 h-10 block font-semibold text-white hover:bg-gray-300">test link</a>
          </div>
        </nav>

        <div className="mt-8 w-4/5 flex justify-between">
          <div className="bg-gray-600 inline-block border-solid border-white ml-8 w-full h-auto">
            text
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
