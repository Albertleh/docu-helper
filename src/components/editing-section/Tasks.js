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
  const carryluchboxtext = [`${name} hat heute Früh ordnungsgemäß die leere Jausenbox zurück in die Küche gebracht. `];
  const selfoccupationtext = [`Lange Zeit über fand ${name} auch gute Wege, sich selbst zu beschäftigen. `]
  const doorservicetext = [`${name} übernahm voluntaristisch für einige Zeit den Türdienst, um Hrn. Miedler vor sich selbst zu schützen. `]
  const artistictext = [`Weiters fand ${name} am Vormittag Freude am ausüben künstlerischer Tätigkeiten. `, 
                        `${name} betätigt sich für einige Zeit des Vormittags künstlerisch. `]
  const smokingtext = [`Ebenfalls nennenswert ist, dass ${name} heute überdurchschnittlich viel Zeit mit dem Rauchen verbrachte. `]

  let disablebutton = true;
  if ( name.length == 0 ) {
    disablebutton = true;
  } else if ( name.length > 0 ) {
    disablebutton = false;
  }

  const ACTION = {
    KAFFEE_GEMACHT: "Kaffee gemacht",
    MUELL_RAUSGETRAGEN: "Müll rausgetragen",
    HAT_AUFGERAEUMT: "hat aufgeräumt",
    GRUPPENGESCHEHEN_TEILGENOMMEN: "Geschehen teilgenommen",
    BOTENGAENGE_ERLEDIGT: "Botengänge erledigt",
    JAUSENBOX_RUNTERGETRAGEN: "Jausenbox runtergetragen",
    SELBSTBESCHAEFTIGUNG: "selbst beschäftigt",
    TUERDIENST: "Türdienst",
    KUENSTLERISCHE_TAETIGKEIT: "künstlerische Tätigkeit",
    RAUCHEN: "Rauchen",
  };

  const selectMoodHandler = (text) => {
    if (text === ACTION.KAFFEE_GEMACHT) {
      setMoodText([
        moodText +
        makingcoffeetext[Math.floor(Math.random() * makingcoffeetext.length)],
      ]);
    } else if (text === ACTION.MUELL_RAUSGETRAGEN) {
      setMoodText([
        moodText +
        takingouttrashtext[Math.floor(Math.random() * takingouttrashtext.length)],
      ]);
    } else if (text === ACTION.HAT_AUFGERAEUMT) {
      setMoodText([
        moodText +
        cleaningtext[Math.floor(Math.random() * cleaningtext.length)],
      ]);
    } else if (text === ACTION.GRUPPENGESCHEHEN_TEILGENOMMEN) {
      setMoodText([
        moodText +
        participatingtext[Math.floor(Math.random() * participatingtext.length)],
      ]);
    } else if (text === ACTION.BOTENGAENGE_ERLEDIGT) {
      setMoodText([
        moodText +
        carrytext[Math.floor(Math.random() * carrytext.length)],
      ]);
    } else if (text === ACTION.JAUSENBOX_RUNTERGETRAGEN) {
      setMoodText([
        moodText +
        carryluchboxtext[Math.floor(Math.random() * carryluchboxtext.length)],
      ]);
    } else if (text === ACTION.SELBSTBESCHAEFTIGUNG) {
      setMoodText([
        moodText +
        selfoccupationtext[Math.floor(Math.random() * selfoccupationtext.length)],
      ]);
    } else if (text === ACTION.TUERDIENST) {
      setMoodText([
        moodText +
        doorservicetext[Math.floor(Math.random() * doorservicetext.length)],
      ]);
    } else if (text === ACTION.RAUCHEN) {
      setMoodText([
        moodText +
        smokingtext[Math.floor(Math.random() * smokingtext.length)],
      ]);
    } else if (text === ACTION.KUENSTLERISCHE_TAETIGKEIT) {
      setMoodText([
        moodText +
        artistictext[Math.floor(Math.random() * artistictext.length)],
      ]);
    } else {
      alert('error')
    }
  };

  return (
    <React.Fragment>
      <div className="mood-text text-slate-300 font-bold text-2xl">
        Aufgaben
      </div>
      <div class="m-3 grid lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8">
        <ButtonElement
          icon={kaffee}
          text={ACTION.KAFFEE_GEMACHT}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={recyclebin}
          text={ACTION.MUELL_RAUSGETRAGEN}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={broom}
          text={ACTION.HAT_AUFGERAEUMT}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={hand}
          text={ACTION.GRUPPENGESCHEHEN_TEILGENOMMEN}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={walk}
          text={ACTION.BOTENGAENGE_ERLEDIGT}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={tupperware}
          text={ACTION.JAUSENBOX_RUNTERGETRAGEN}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={mirror}
          text={ACTION.SELBSTBESCHAEFTIGUNG}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={door}
          text={ACTION.TUERDIENST}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={paint}
          text={ACTION.KUENSTLERISCHE_TAETIGKEIT}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={smoking}
          text={ACTION.RAUCHEN}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
      </div>
    </React.Fragment>
  );
};

export default Tasks;
