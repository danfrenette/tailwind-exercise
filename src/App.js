import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSuitcase, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const githubLink = "https://www.github.com/danfrenette"
const linkedinLink = "https://www.linkedin.com/in/danfrenette/"
const emailLink = "mailto: Dan.R.Frenette@gmail.com"

function App() {
  return (
    <div className="font-sans overflow-auto antialiased text-gray-900 leading-normal tracking-wider bg-cover" style={{backgroundImage: "url('/background.jpg')"}} >
      <div className="max-w-4xl flex items-center h-auto h-screen flex-wrap mx-auto lg:my-0">
        <div id="profile" className="my-32 w-full lg:w-7/12 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
          <div className="p-4 md:p-12 text-center lg:text-left">
            <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 md:-mt-24 h-48 w-48 bg-cover bg-center" style={{backgroundImage: "url('/me-sq.jpg')"}}></div>
            <h1 className="text-3xl font-bold pt-8 lg:pt-0">Dan Frenette</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-500 opacity-25"></div>

            <p className="pt-4 text-base flex items-center justify-center lg:justify-start">
              <FontAwesomeIcon className="mr-3 text-xl text-teal-700" icon={faSuitcase} />
              Software Engineer
            </p>

            <p className="pt-4 text-base flex items-center justify-center lg:justify-start">
              <FontAwesomeIcon className="ml-1 mr-3 text-xl text-teal-700" icon={faMapMarker} />
              Greater Boston Area
            </p>

            <p className="pt-6 text-sm text-justify lg:text-left">
              My name's Dan, and I like building web apps that make our world a
              better place! Right now I'm learning to be a better dev at The
              Gnar, and teaching devs to be better humans at SoftSkills.dev
            </p>

            <div className="mt-12 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-center lg:justify-start">
              <a className="link" href={githubLink}><FontAwesomeIcon className="h-6 text-4xl fill-current text-gray-600 hover:text-teal-700" icon={faGithub} /></a>
              <a className="link" href={linkedinLink}><FontAwesomeIcon className="h-6 text-4xl fill-current text-gray-600 hover:text-teal-700" icon={faLinkedin} /></a>
              <a className="link" href={emailLink}><FontAwesomeIcon className="h-6 text-4xl fill-current text-gray-600 hover:text-teal-700" icon={faEnvelope} /></a>
            </div>
          </div>

        </div>
        <div className="w-full lg:w-5/12">
          <img alt="Dan Frenette" src="/me.jpg" className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"/>
        </div>
      </div>
    </div>
  );
}

export default App;
