import React from 'react';
import logo from './logo.svg';
import Tab from './Tab';

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
          <Tab text="About Me"/>
          <Tab text="Resume"/>
          <Tab text="Blog Posts"/>
        </nav>

        <div className="mt-8 w-4/5 flex justify-between h-2 min-height-20">
          <div className="bg-orange-100 inline-block rounded ml-8 py-8 px-12 w-full">
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
