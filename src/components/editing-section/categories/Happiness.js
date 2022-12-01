import React, { useContext } from "react";
import { nameContext } from "../../../Helpers/Context";
import { moodTextContext } from "../../../Helpers/Context";
import ButtonElement from "../ButtonElement";

import veryhappy from "../../../assets/very-happy.png";
import happy from "../../../assets/happy.png";
import neutral from "../../../assets/neutral.png";
import sad from "../../../assets/sad.png";
import verysad from "../../../assets/very-sad.png";

const Happiness = () => {
  const ITEMS = [
    ["Sehr Gut", veryhappy],
    ["Gut", happy],
    ["Neutral", neutral],
    ["Schlecht", sad],
    ["Sehr Schlecht", verysad],
  ];

  const { name } = useContext(nameContext);

  let disablebutton = true;
  if (name.length === 0) {
    disablebutton = true;
  } else if (name.length > 0) {
    disablebutton = false;
  }

  const veryhappytext = [
    `${name} kam heute sehr zufrieden in die Tagesstätte. `,
    `${name} ging heute mit einem Lächeln in die Tagesstätte und wirkte sehr zufrieden. `,
    `${name} war heute scheinbar sehr gut aufgelegt und grüßte freundlich beim Betreten der Tagesstätte. `,
  ];
  const happytext = [
    `${name} kam heute allgemein zufrieden in die Tagesstätte. `,
    `${name} ging heute wohlauf in die Tagesstätte und wirkte allgemein ziemlich zufrieden. `,
    `An diesem Vormittag wirkte ${name} generell gut aufgelegt und grüßte freundlich. `,
  ];
  const neutraltext = [
    `${name} wirkte heute beim Betreten der Werkstätte von der Zufriedenheit her neutral. `,
    `${name} zeigte heute eine ausgeglichene Stimmung und wirkte allgemein neutral in seiner Zufriedenheit. `,
    `Heute wirkte ${name} sehr ausgeglichen und zeigte neutrale Laune. `,
  ];
  const sadtext = [
    `${name} kam heute betrübt in die Tagesstätte und wirkte leicht schlecht gelaunt. `,
    `${name} betrat heute wenig zufrieden die Tagesstätte und zeigte unglückliches Verhalten. `,
    `Am heutigen Tag betrat ${name} wenig gut gelaunt die Tagesstätte. `,
  ];
  const verysadtext = [
    `${name} kam heute sichtbar miserabel gelaunt in die Tagesstätte und verbalisierte immer wieder schlechte Stimmung. `,
    `${name} wirkte beim Betreten der Tagesstätte sehr schlecht gelaunt und gestikulierte sich abweisend. `,
    `Heute betrat ${name} sichtbar schlecht gelaunt die Tagesstätte, was durch Körpersprache verdeutlicht wurde. `,
  ];

  const { setMoodText } = useContext(moodTextContext);

  const selectMoodHandler = (text) => {
    console.log(text.trim());
    if (text === ITEMS[0][0]) {
      setMoodText(veryhappytext[Math.floor(Math.random() * veryhappytext.length)]);
    } else if (text === ITEMS[1][0]) {
      setMoodText(happytext[Math.floor(Math.random() * happytext.length)]);
    } else if (text === ITEMS[2][0]) {
      setMoodText(neutraltext[Math.floor(Math.random() * neutraltext.length)]);
    } else if (text === ITEMS[3][0]) {
      setMoodText(sadtext[Math.floor(Math.random() * sadtext.length)]);
    } else if (text === ITEMS[4][0]) {
      setMoodText(verysadtext[Math.floor(Math.random() * verysadtext.length)]);
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
        Zufriedenheit
      </div>
      <div className="m-3 grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {content}
      </div>
    </React.Fragment>
  );
};

export default Happiness;
