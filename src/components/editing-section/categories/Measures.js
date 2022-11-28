import React, { useContext } from "react";

import consulting from "../../../assets/consulting.png";
import diagram from "../../../assets/diagram.png";
import instruction from "../../../assets/instruction.png";
import observer from "../../../assets/observer.png";
import support from "../../../assets/support.png";
import caress from "../../../assets/caress.png";
import speak from "../../../assets/speak.png";

import { moodTextContext } from "../../../Helpers/Context";
import { nameContext } from "../../../Helpers/Context";
import ButtonElement from "../ButtonElement";

const Measures = () => {
  const { moodText, setMoodText } = useContext(moodTextContext);
  const { name } = useContext(nameContext);

  const basalstimulationtext = [`${name} benötigt heute basale Stimulation zur Beruhigung. Dies zeigte Wirkung und verhalf zur Entspannung. `,
                                `Heute wurde bei ${name} basale Stimulation zur Beruhigung angewandt. `,
                                `An diesem Vormittag benötigt ${name} basale Stimulation, welche eine entspannende Wirkung zeigte. `,];
  const strukturtext = [`${name} benötigt heute  strukturierte Maßnahmen durch das Betreuerteam, was sich auch als Wirkungsvoll zeigt. `,
                                `Heute mussten bei ${name} Maßnahmen zur Wiederherstellung der Struktur angewandt werden. `,
                                `Am Vormittag benötigt ${name} vermehrt strukturierte Maßnahmen zur Orientierung. `,];
  const gespraechtext = [`Heute braucht es bei ${name} ein Einzelgespräch, um die Anforderungen des Betreuerteams mit den Anliegen von ${name} zu vereinbaren. `,
                         `${name} benötigt diesen Vormittag ein Einzelgespräch, welches Klarheit verschafft. `,
                         `Diesen Vormittag wurde ${name} ein Gespräch unter vier Augen angeboten, woraufhin Beschwerden und Anliegen abgeklärt werden konnten. `, ];
  const einzelsettingtext = [`${name} benötigt heute viel Betreuung im Einzelsetting, wodurch die Anforderungen des Klienten wahr genommen werden konnten. `,
                             `${name} benötigt heute viel Betreuung im Einzelsetting, wodurch die Anforderungen des Klienten wahr genommen werden konnten. `, ];
  const beobachtungstext = [`${name} braucht heute Vormittag außerdem akribische Beobachtung, um ${name}'s Sicherheit zu gewährleisten. `];
  const unterstützungstext = [`${name} benötigt heute viel Unterstützung durch das Betreuerteam, da an diesem Vormittag die Alltagstätigkeiten schwer fallen. `];
  const verbaleanleitungstext = [`${name} benötigt diesen Vormittag verbale Anleitung beim Ausführen diverser Aufgaben durch das Betreuerteam. `,
                                 `Heute Vormittag brauchte es bei ${name} vermehrt verbale Anleitung zur Orientierung. `,
                                 `Vormittags braucht ${name} immer wieder strukturierte verbale Anleitung als roten Faden. `,];

  let disablebutton = true;
  if ( name.length === 0 ) {
    disablebutton = true;
  } else if ( name.length > 0 ) {
    disablebutton = false;
  }

  const ITEMS = [
    ["basale Stimulation", caress],
    ["klare Strukturangabe", diagram],
    ["klärendes Gespräch", speak],
    ["Einzelsetting betreut", consulting],
    ["vermehrte Beobachtung", observer],
    ["verbale Anleitung", instruction],
    ["Unterstützung", support],
  ];

  const selectMoodHandler = (text) => {
    if (text === ITEMS[0][0]) {
      setMoodText([moodText + basalstimulationtext[Math.floor(Math.random() * basalstimulationtext.length)]]);
    } else if (text === ITEMS[1][0]) {
      setMoodText([moodText + strukturtext[Math.floor(Math.random() * strukturtext.length)]]);
    } else if (text === ITEMS[2][0]) {
      setMoodText([moodText + gespraechtext[Math.floor(Math.random() * gespraechtext.length)]]);
    } else if (text === ITEMS[3][0]) {
      setMoodText([moodText + einzelsettingtext[Math.floor(Math.random() * einzelsettingtext.length)]]);
    } else if (text === ITEMS[4][0]) {
      setMoodText([moodText + beobachtungstext[Math.floor(Math.random() * beobachtungstext.length)]]);
    } else if (text === ITEMS[5][0]) {
      setMoodText([moodText + verbaleanleitungstext[Math.floor(Math.random() * verbaleanleitungstext.length)]]);
    } else if (text === ITEMS[6][0]) {
      setMoodText([moodText + unterstützungstext[Math.floor(Math.random() * unterstützungstext.length)]]);
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
      <div className=" mood-text text-slate-300 font-bold text-2xl mb-2">
        Pädagogische Maßnahmen
      </div>
      <div className="m-3 grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
        {content}
      </div>
    </React.Fragment>
  );
};

export default Measures;
