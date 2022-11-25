import React, { useContext } from "react";

import broom from "../../assets/broom.png";
import hand from "../../assets/hand.png";
import kaffee from "../../assets/kaffee.png";
import recyclebin from "../../assets/recycle-bin.png";
import walk from "../../assets/walk.png";
import tupperware from "../../assets/tupperware.png";
import mirror from "../../assets/mirror.png";
import smoking from "../../assets/smoking.png";
import door from "../../assets/door.png";
import paint from "../../assets/paint.png";

import { moodTextContext, nameContext } from "../../Helpers/Context";
import ButtonElement from "./ButtonElement";

const Tasks = () => {
  const { moodText, setMoodText } = useContext(moodTextContext);
  const { name } = useContext(nameContext);

  const makingcoffeetext = [`Bezüglich Tätigkeiten hat ${name} heute die Aufgabe des Kaffeekochens angenommen und auch erfüllt. `];
  const takingouttrashtext = [`Ebenfalls wurde der Müll heute von ${name} selbstständig zum Müllplatz getragen und dort entsorgt. `];
  const cleaningtext = [`${name} war heute sehr um die Sauberkeit der Gruppe bemüht und nahm selbstbestimmt diverse Reinungstätigkeiten an. `];
  const participatingtext = [`Außerdem ist zu betonen, dass ${name} heute sich aktiv in das Gruppengeschehen eingebracht hat und sehr proaktiv agierte. `];
  const carrytext = [`Ebenfalls erledigte ${name} am Vormittag diverse Botengänge in die Küche. `];
  const carryluchboxtext = [`${name} hat heute Früh die leere Jausenbox zurück in die Küche gebracht. `];
  const selfoccupationtext = [`Lange Zeit über fand ${name} auch gute Wege, sich selbst zu beschäftigen. `]
  const doorservicetext = [`${name} übernahm freiwillig für einige Zeit den Türdienst, um Hrn. Miedler vor sich selbst zu schützen. `]
  const artistictext = [`Weiters fand ${name} am Vormittag Freude am ausüben künstlerischer Tätigkeiten. `, 
                        `${name} betätigt sich für einige Zeit des Vormittags künstlerisch. `]
  const smokingtext = [`Ebenfalls nennenswert ist, dass ${name} heute einige Zeit mit Rauchen verbrachte. `]

  let disablebutton = true;
  if ( name.length === 0 ) {
    disablebutton = true;
  } else if ( name.length > 0 ) {
    disablebutton = false;
  }

  const ITEMS = [
    ["Kaffee gemacht", kaffee],
    ["Müll rausgetragen", recyclebin],
    ["hat aufgeräumt", broom],
    ["Geschehen teilgenommen", hand],
    ["Botengänge erledigt", walk],
    ["Jausenbox runtergetragen", tupperware],
    ["selbst beschäftigt", mirror],
    ["Türdienst", door],
    ["Rauchen", smoking],
    ["künstlerische Tätigkeit", paint],
  ];

  const selectMoodHandler = (text) => {
    if (text === ITEMS[0][0]) {
      setMoodText([moodText + makingcoffeetext[Math.floor(Math.random() * makingcoffeetext.length)]]);
    } else if (text === ITEMS[1][0]) {
      setMoodText([moodText + takingouttrashtext[Math.floor(Math.random() * takingouttrashtext.length)]]);
    } else if (text === ITEMS[2][0]) {
      setMoodText([moodText + cleaningtext[Math.floor(Math.random() * cleaningtext.length)]]);
    } else if (text === ITEMS[3][0]) {
      setMoodText([moodText + participatingtext[Math.floor(Math.random() * participatingtext.length)]]);
    } else if (text === ITEMS[4][0]) {
      setMoodText([moodText + carrytext[Math.floor(Math.random() * carrytext.length)]]);
    } else if (text === ITEMS[5][0]) {
      setMoodText([moodText + carryluchboxtext[Math.floor(Math.random() * carryluchboxtext.length)]]);
    } else if (text === ITEMS[6][0]) {
      setMoodText([moodText + selfoccupationtext[Math.floor(Math.random() * selfoccupationtext.length)]]);
    } else if (text === ITEMS[7][0]) {
      setMoodText([moodText + doorservicetext[Math.floor(Math.random() * doorservicetext.length)]]);
    } else if (text === ITEMS[8][0]) {
      setMoodText([moodText + smokingtext[Math.floor(Math.random() * smokingtext.length)]]);
    } else if (text === ITEMS[9][0]) {
      setMoodText([ moodText + artistictext[Math.floor(Math.random() * artistictext.length)]]);
    } else {
      alert('error text doesnt match!');
    }
  };

  let content = ITEMS.map((item) => {
    return (
      <ButtonElement
        text={item[0]}
        icon={item[1]}
        disable={disablebutton}
        onSelect={selectMoodHandler}
        key={Math.random()}
      />
    );
  });

  return (
    <React.Fragment>
      <div className="mood-text text-slate-300 font-bold text-2xl">
        Aufgaben
      </div>
      <div className="m-3 grid lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8">
        {content}
      </div>
    </React.Fragment>
  );
};

export default Tasks;
