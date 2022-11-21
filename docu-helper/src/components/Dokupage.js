import React from "react";

import veryhappy from '../assets/very-happy.png';
import happy from '../assets/happy.png';
import neutral from '../assets/neutral.png';
import sad from '../assets/sad.png';
import verysad from '../assets/very-sad.png';

import ButtonElement from "./ButtonElement";


const Dokupage = () => {
  return (
    <div className="drop-shadow-xl z-20 py-3 px-6 mt-10 flex flex-col justify-center items-center bg-gray-800 rounded-3xl container mx-auto max-w-5xl">
      <div className="mood-text text-slate-100 font bold text-2xl">
        Stimmung
      </div>
      <div class="m-3 grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <ButtonElement icon={veryhappy} text='Exzellent' />
        <ButtonElement icon={happy} text='Gut' />
        <ButtonElement icon={neutral} text='Neutral' />
        <ButtonElement icon={sad} text='Schlecht' />
        <ButtonElement icon={verysad} text='Miserabel' />
      </div>
      
    </div>
  );
};

export default Dokupage;
