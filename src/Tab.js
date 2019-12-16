import React from 'react';

function Tab({text}) {
  return (
    <div className="inline-block w-1/3 border-solid border-white border-l-4 border-t-4 text-center ml-8">
      <a href="#" className="p-2 h-12 block font-semibold text-white text-2xl hover:bg-gray-300">{text}</a>
    </div>
  )
}

export default Tab;
