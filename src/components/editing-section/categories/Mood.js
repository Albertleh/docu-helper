import React, { useContext } from "react";

import annoyed from "../../../assets/mood-annoyed.png";
import confirmation from "../../../assets/mood-confirmation.png";
import sad from "../../../assets/mood-sad.png";
import sleepy from "../../../assets/mood-sleepy.png";
import worried from "../../../assets/mood-worried.png";
import relaxed from "../../../assets/mood-relaxed.png";
import angry from "../../../assets/mood-angry.png";
import handshake from "../../../assets/handshake.png";
import megaphone from "../../../assets/megaphone.png";
import nature from "../../../assets/nature.png";
import talkative from "../../../assets/talkative.png";
import prediction from "../../../assets/prediction.png";
import nervous from "../../../assets/nervous.png";
import energy from "../../../assets/energy.png";
import smartphone from "../../../assets/smartphone.png";

import { moodTextContext } from "../../../Helpers/Context";
import { nameContext } from "../../../Helpers/Context";
import ButtonElement from "../ButtonElement";

const Mood = () => {
  const { moodText, setMoodText } = useContext(moodTextContext);
  const { name } = useContext(nameContext);

  const annoyedtext = [
    `Außerdem wirkte ${name} während des Vormittags über genervt und auch ein bisschen missverstanden. `,
    `Heute wirkte ${name} auch ein wenig betrübt und genervt. `,
  ];
  const confirmationtext = [
    `Ebenfalls suchte ${name} zunehmend Bestätigung von dem Betreuerteam und stellt sich öfters selbst in Frage. `,
    `Heute sucht ${name} auch öfters nach Bestätigung vom Betreuern und wirkt nicht besonders selbstsicher. `,
  ];
  const sadtext = [
    `Außerdem wirkte ${name} während den frühen Stunden ein wenig traurig, was auf die isolierende Gestik zurückzuführen war. `,
    `${name} war an diesem Vormittag nicht besonders glücklich und wies immer wieder auf einige Missstände hin. `,
  ];
  const sleepytext = [
    `Zudem schien es so als hätte ${name} nicht gut oder ausreichend geschlafen, da die Gestik (insbesodere durch Gähnen) auf Müdigkeit hinwies. `,
    `Den ganzen Tag über wirkte ${name} nicht besonders munter, sondern ein wenig schläfrig allgemein. `,
  ];
  const worriedtext = [
    `Abgesehen davon wirkte ${name} die ganze Zeit über ein wenig betrübt und gestikulierte sich besorgt. `,
    `Dem hinzuzufügen ist, dass ${name} heute ein wenig besorgt ist und mehrmals diverse auftretende Bedenken außert. `,
  ];
  const relaxedtext = [
    `Ebenfalls zu erwähnen ist, dass sich ${name} heute sehr ruhig verhielt und die meißte Zeit über in einem allgemein entspannten Zustand verweilt. `,
    `${name} wirkt heute sehr relaxed und verweilt längere Zeit über in einem entspannten Zustand. `,
  ];
  const angrytext = [
    `${name}'s Aggression gegenüber anderen Klienten war heute kaum zu übersehen, da das Gruppengeschehen vermehrt durch energische Gestiken und Handgriffe befeuert wurde. `,
    `Heute wirkt ${name} sehr aufgebracht und zeigt sich immer wieder als fremdaggressiv. `,
  ];
  const autoangrytext = [
    `${name} war am über den Tag verteilt immer wieder autoaggressiv und verletzte sich selbst. `,
    `Heute verhielt sich ${name} immer wieder autoaggressiv und gestikulierte sich unruhig. `,
  ];
  const gespraechigtext = [
    `${name} ist heute sehr gesprächig und teilt Fakten rund um das eigene geistige und körperliche Wohlbefinden sowohl mit den Betreuern als auch mit anderen Klienten. `,
    `An diesem Vormittag war ${name} sehr mitteilungsbedürftig und unterhielt sich sowohl mit Klienten als auch Betreuern. `,
  ];
  const hilfsbereittext = [
    `${name}'s Hilfsbereitschaft war am heutigen Tag deutlich zu erkennen, da dem Betreuerteam oft Unterstützung bei ihren Tätigkeiten angeboten wurde. `,
    `Heute zeigte ${name} ausgeprägte Hilfsbereitschaft, da dem Betreuerteam immer wieder Hilfe angeboten wird. `,
  ];
  const angetriebentext = [
    `${name} wirkt heute ein wenig sprunghaft und impulsiv, da die Gestik des öfteren darauf hinwies. ${name} pendelt öfters zwischen verschiedenen Sitzplätzen hin und her. `,
    `Über den ganzen Vormittag vierhielt sich ${name} sehr angetrieben, konnte nicht lange an einem Platz sitzen bleiben und wirkte ein wenig nervös. `,
  ];
  const nervoestext = [
    `Nicht zuletzt zeigte ${name} am Vormittag vermehrt nervöses Verhalten. Schnelles Sprechen, unruhiges Sitzen und ruckartige Bewegungsimpulse zählten zu den Symptomen. In Folge wurden ${name} Methoden zur Stressbewältigung angeboten. `,
    `${name} verhielt sich heute allgemein ein wenig sprunghaft und gestikulierte sich nervös. `,
  ];
  const handyeinstellungentext = [
    `${name} hatte heute Schwierigkeiten mit der Konfiguration des eigenen Smartphones. Das Betreuerteam zeigte mögliche Lösungsansätze auf, verwies jedoch ebenfalls auf das Handyverbot. `,
    `Heute wurde ${name} bei einigen Handyeinstellungen beim eigenen Smartphone unterstützt, jedoch wurde gleichzeitig von übermäßigem Konsum abgeraten. `
  ];
  const draussenaufhaltendtext = [
    `${name} hielt sich heute allgemein sehr gerne draußen am Hof auf, nachdem das Betreuerteam entsprechende Kleidung sicherstellte. Vereinzelt kam es auch draußen zur Begegnung mit Personal und Klientel außerhalb der eigenen Gruppe. `,
    `Diesen Vormittag über hielt sich ${name} immer wieder gerne am Hof auf und hatte dort ebenfalls Kontakt zu anderen Klienten und Betreuern außerhalb der Werkstatt. `,
  ];
  const lauttext = [
    `${name}'s Unruhe am Vormittag war kaum zu überhören, da ${name} immer wieder laute Schreie und Töne von sich gab, womit periodisch verbal Unwohlsein bekanntgegeben wurde. `,
    `Heute lautierte ${name} öfters umher und wirkte dabei sehr angespannt und nervös. Das Betreuerteam setzte daraufhin Maßnahmen zur Beruhigung`,
  ];
  const schwankendegefuehletext = [
    `${name} fiel heute am Vormittag verstärkt durch Gefühlsschwankungen auf, die die Laune prägten. Allgemein ist festzustellen, dass heute der Gemütszustand von ${name} durchaus volatil ist. `,
    `Am Vormittag wirkt ${name} ein wenig durcheinander. Die Laune von ${name} schien außerdem über den Tag verteilt mehrmals zu schwanken. `,
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
        key={Math.random()}
      />
    );
  });

  return (
    <React.Fragment>
      <div className="mood-header-text">
        Stimmungen
      </div>
      <div className="m-3 grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8">
        {content}
      </div>
    </React.Fragment>
  );
};

export default Mood;
