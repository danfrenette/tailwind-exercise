import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="flex bg-cover h-screen" style={{backgroundImage: "url('/2btestwallpaper.jpeg')"}}>
      <div className="w-5/12 flex flex-col items-center justify-center">
        <div className="block w-6/12">
          <img class="rounded-full border-solid border-white border-4" src="/headshot.jpg" />
        </div>

        <div className="block w-6/12 text-center mt-8">
          <h1 className="text-6xl text-white">Dan Frenette</h1>
        </div>
      </div>

      <div className="w-7/12 h-full">one third</div>
    </div>
  );
}

export default App;
