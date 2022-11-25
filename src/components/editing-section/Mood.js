import React, { useContext } from "react";

import annoyed from "../../assets/mood-annoyed.png";
import confirmation from "../../assets/mood-confirmation.png";
import sad from "../../assets/mood-sad.png";
import sleepy from "../../assets/mood-sleepy.png";
import worried from "../../assets/mood-worried.png";
import relaxed from "../../assets/mood-relaxed.png";
import angry from "../../assets/mood-angry.png";
import handshake from "../../assets/handshake.png";
import megaphone from "../../assets/megaphone.png";
import nature from "../../assets/nature.png";
import talkative from "../../assets/talkative.png";
import prediction from "../../assets/prediction.png";
import nervous from "../../assets/nervous.png";
import energy from "../../assets/energy.png";
import smartphone from "../../assets/smartphone.png";

import { moodTextContext } from "../../Helpers/Context";
import { nameContext } from "../../Helpers/Context";
import ButtonElement from "./ButtonElement";

const Mood = () => {
  const { moodText, setMoodText } = useContext(moodTextContext);
  const { name } = useContext(nameContext);

  const annoyedtext = [
    `Außerdem wirkte ${name} während des Vormittags über genervt und auch ein bisschen missverstanden. `,
  ];
  const confirmationtext = [
    `Ebenfalls suchte ${name} zunehmend Bestätigung von dem Betreuerteam und stellt sich öfters selbst in Frage. `,
  ];
  const sadtext = [
    `Außerdem wirkte ${name} während den frühen Stunden ein wenig traurig, was auf die isolierende Gestik zurückzuführen war. `,
  ];
  const sleepytext = [
    `Zudem schien es so als hätte ${name} nicht gut oder ausreichen  geschlafen, da die Gestik (insbesodere durch Gähnen) auf Müdigkeit hinwies. `,
  ];
  const worriedtext = [
    `Abgesehen davon wirkte ${name} die ganze Zeit über ein wenig betrübt und gestikulierte sich besorgt. `,
  ];
  const relaxedtext = [
    `Ebenfalls zu erwähnen ist, dass sich ${name} heute sehr ruhig verhielt und die Zeit über in einem allgemein entspannten Zustand verweilt. `,
  ];
  const angrytext = [
    `${name}'s Aggression gegenüber anderen Klienten war heute kaum zu übersehen, da das Gruppengeschehen vermehrt durch energische Gestiken und Handgriffe befeuert wurde. `,
  ];
  const autoangrytext = [
    `${name} war am über den Tag verteilt immer wieder Autoaggressiv und verletzte sich selbst. `,
  ];
  const gespraechigtext = [
    `${name} ist heute sehr gesprächig und teilte Fakten rund um das eigene geistige und körperliche Wohlbefinden sowohl mit den Betreuern als auch mit anderen Klienten . `,
  ];
  const hilfsbereittext = [
    `${name}'s Hilfsbereitschaft war am heutigen Tag deutlich zu erkennen, da dem Betreuerteam oft Unterstützung bei ihren Tätigkeiten angeboten wurde. `,
  ];
  const angetriebentext = [
    `${name} wirkt heute ein wenig Sprunghaft und impulsiv, da die Gestik des öfteren darauf hinwies. ${name} pendelt öfters zwischen verschiedenen Sitzplätzen hin und her. `,
  ];
  const nervoestext = [
    `Nicht zuletzt zeigte ${name} am Vormittag vermehrt nervöses Verhalten. Schnelles Sprechen, unruhiges Sitzen und ruckartige Bewegungsimpulse zählten zu den Symptomen. In Folge wurden ${name} Methoden zur Stressbewältigung angeboten. `,
  ];
  const handyeinstellungentext = [
    `${name} hatte heute Schwierigkeiten mit der Konfiguration des Smartphones. Das Betreuerteam zeigte mögliche Lösungsansätze auf, verwies jedoch ebenfalls auf das Handyverbot. `,
  ];
  const draussenaufhaltendtext = [
    `${name} hielt sich heute allgemein sehr gerne draußen am Hof auf, nachdem das Betreuerteam entsprechende Kleidung sicherstellte. Vereinzelt kam es auch draußen zur Begegnung mit Personal und Klientel außerhalb der eigenen Gruppe. `,
  ];
  const lauttext = [
    `${name}'s Unruhe war am Vormittag kaum zu überhören, da ${name} immer wieder laute Schreie und Töne von sich gab, womit periodisch verbal Unwohlsein bekanntgegeben wurde. `,
  ];
  const schwankendegefuehletext = [
    `${name} fiel heute am Vormittga verstärkt durch Gefühlsschwankungen auf, die die Laune prägten. Allgemein ist festzustellen, dass heute der gemütszustand von ${name} durchaus volatil ist. `,
  ];

  let disablebutton = true;
  if (name.length === 0) {
    disablebutton = true;
  } else if (name.length > 0) {
    disablebutton = false;
  }

  const ITEMS = [
    ["genervt", annoyed],
    ["sucht Bestätigung", confirmation],
    ["traurig", sad],
    ["entspannt", relaxed],
    ["fremd- aggressiv", angry],
    ["auto- aggressiv", angry],
    ["besorgt", worried],
    ["schläfrig", sleepy],
    ["gesprächig", talkative],
    ["hilfsbereit", handshake],
    ["angetrieben", energy],
    ["nervös", nervous],
    ["Handy Einstellungen", smartphone],
    ["Draußen Aufhaltend", nature],
    ["laut", megaphone],
    ["schwankende Gefühle", prediction],
  ];

  const selectMoodHandler = (text) => {
    if (text === ITEMS[0][0]) {
      setMoodText([moodText + annoyedtext[Math.floor(Math.random() * annoyedtext.length)]]);
    } else if (text === ITEMS[1][0]) {
      setMoodText([moodText + confirmationtext[Math.floor(Math.random() * confirmationtext.length)]]);
    } else if (text === ITEMS[2][0]) {
      setMoodText([moodText + sadtext[Math.floor(Math.random() * sadtext.length)]]);
    } else if (text === ITEMS[3][0]) {
      setMoodText([moodText + relaxedtext[Math.floor(Math.random() * relaxedtext.length)]]);
    } else if (text === ITEMS[4][0]) {
      setMoodText([moodText + angrytext[Math.floor(Math.random() * angrytext.length)]]);
    } else if (text === ITEMS[5][0]) {
      setMoodText([moodText + autoangrytext[Math.floor(Math.random() * angrytext.length)]]);
    } else if (text === ITEMS[6][0]) {
      setMoodText([moodText + worriedtext[Math.floor(Math.random() * worriedtext.length)]]);
    } else if (text === ITEMS[7][0]) {
      setMoodText([moodText + sleepytext[Math.floor(Math.random() * sleepytext.length)]]);
    } else if (text === ITEMS[8][0]) {
      setMoodText([moodText + gespraechigtext[Math.floor(Math.random() * gespraechigtext.length)]]);
    } else if (text === ITEMS[9][0]) {
      setMoodText([moodText + hilfsbereittext[Math.floor(Math.random() * hilfsbereittext.length)]]);
    } else if (text === ITEMS[10][0]) {
      setMoodText([moodText + angetriebentext[Math.floor(Math.random() * angetriebentext.length)]]);
    } else if (text === ITEMS[11][0]) {
      setMoodText([ moodText + nervoestext[Math.floor(Math.random() * nervoestext.length)]]);
    } else if (text === ITEMS[12][0]) {
      setMoodText([moodText + handyeinstellungentext[Math.floor(Math.random() * handyeinstellungentext.length)]]);
    } else if (text === ITEMS[13][0]) {
      setMoodText([moodText + draussenaufhaltendtext[Math.floor(Math.random() * draussenaufhaltendtext.length)]]);
    } else if (text === ITEMS[14][0]) {
      setMoodText([moodText + lauttext[Math.floor(Math.random() * lauttext.length)]]);
    } else if (text === ITEMS[15][0]) {
      setMoodText([moodText + schwankendegefuehletext[Math.floor(Math.random() * schwankendegefuehletext.length)]]);
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
      />
    );
  });

  return (
    <React.Fragment>
      <div className=" mood-text text-slate-300 font-bold text-2xl">
        Stimmungen
      </div>
      <div class="m-3 grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8">
        {content}
      </div>
    </React.Fragment>
  );
};

export default Mood;
