import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Tab from './Tab';

const githubLink = "https://www.github.com/danfrenette"
const linkedinLink = "https://www.linkedin.com/in/danfrenette/"
const emailLink = "mailto: Dan.R.Frenette@gmail.com"

function App() {
  return (
    <div className="flex bg-cover h-screen" style={{backgroundImage: "url('/2btestwallpaper.jpeg')"}}>
      <div className="w-5/12 flex flex-col items-center justify-center">
        <div className="block w-6/12">
          {/* <div className="hexagon"></div> */}
          <img className="rounded-full border-solid border-white border-4" src="/headshot.jpg" />
        </div>

        <div className="block w-6/12 text-center mt-8 text-white">
          <h1 className="text-6xl">Dan Frenette</h1>
          <a href={githubLink}>
            <FontAwesomeIcon className="mx-3 text-4xl" icon={faGithub} />
          </a>
          <a href={linkedinLink}>
            <FontAwesomeIcon className="mx-3 text-4xl" icon={faLinkedin} />
          </a>
          <a href={emailLink}>
            <FontAwesomeIcon className="mx-3 text-4xl" icon={faEnvelope} />
          </a>
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
