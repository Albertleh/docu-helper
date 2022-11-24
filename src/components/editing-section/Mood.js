import React, { useContext } from "react";

import annoyed from "../../assets/mood-annoyed.png";
import confirmation from "../../assets/mood-confirmation.png";
import sad from "../../assets/mood-sad.png";
import sleepy from "../../assets/mood-sleepy.png";
import worried from "../../assets/mood-worried.png";
import relaxed from "../../assets/mood-relaxed.png";
import angry from "../../assets/mood-angry.png";

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
    `Außerdem wirkte ${name} während den frühen Stunden ein wenig traurig, was auf die isolierende Gestikulierung zurückzuführen war. `,
  ];
  const sleepytext = [
    `Zudem schien es so als hätte ${name} nicht gut oder ausreichen  geschlafen, da die Gestikulierung (insbesodere durch Gähnen) auf Müdigkeit hinwies. `,
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
  const gespraechigtext = [
    `${name} ist heute sehr gesprächig und teilte Fakten rund um das eigene geistige und körperliche Wohlbefinden sowohl mit den Betreuern als auch mit anderen Klienten . `,
  ];
  const hilfsbereittext = [
    `${name}'s Hilfsbereitschaft war am heutigen Tag deutlich zu erkennen, da dem Betreuerteam oft Unterstützung bei ihren Tätigkeiten angeboten wurde. `,
  ];
  const angetriebentext = [
    `${name} wirkt heute ein wenig Sprunghaft und impulsiv, da die Gestikulierung des öfteren darauf hinwies. ${name} pendelt öfters zwischen verschiedenen Sitzplätzen hin und her. `,
  ];
  const nervoestext = [
    `Nicht zuletzt zeigte ${name} am Vormittag vermehrt nervöses Verhalten. Schnelles Sprechen, unruhiges Sitzen und ruckartige Bewegungsimpulse zählten zu den Symptomen. In Folge wurden ${name} Methoden zur Stressbewältigung angeboten. `,
  ];
  const handyeinstellungentext = [
    `${name} hatte heute Schwierigkeiten mit der Konfiguration des Smartphones. Das Betreuerteam verweiste auf mögliche Lösungsansätze, verwies jedoch ebenfalls auf das Handyverbot. `,
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
  if (name.length == 0) {
    disablebutton = true;
  } else if (name.length > 0) {
    disablebutton = false;
  }

  const ACTION = {
    GENERVT: "genervt",
    SUCHT_BESTAETIGUNG: "sucht Bestätigung",
    TRAURIG: "traurig",
    BESORGT: "besorgt",
    SAUER: "fremd- aggressiv",
    AUTOAGGRESSIV: "auto- aggressiv",
    SCHLAEFRIG: "schläfrig",
    ENTSPANNT: "entspannt",
    GESPRAECHIG: "gesprächig",
    HILFSBEREIT: "hilfsbereit",
    ANGETRIEBEN: "angetrieben",
    NERVOES: "nervös",
    HANDY_EINSTELLUNGEN: "Handy Einstellungen",
    DRAUSSEN_AUFHALTEND: "Draußen Aufhaltend",
    LAUT: "laut",
    SCHWANKENDE_GEFUEHLE: "schwankende Gefühle",
  };

  const selectMoodHandler = (text) => {
    if (text === ACTION.GENERVT) {
      setMoodText([
        moodText + annoyedtext[Math.floor(Math.random() * annoyedtext.length)],
      ]);
    } else if (text === ACTION.SUCHT_BESTAETIGUNG) {
      setMoodText([
        moodText +
          confirmationtext[Math.floor(Math.random() * confirmationtext.length)],
      ]);
    } else if (text === ACTION.TRAURIG) {
      setMoodText([
        moodText + sadtext[Math.floor(Math.random() * sadtext.length)],
      ]);
    } else if (text === ACTION.ENTSPANNT) {
      setMoodText([
        moodText + relaxedtext[Math.floor(Math.random() * relaxedtext.length)],
      ]);
    } else if (text === ACTION.SAUER) {
      setMoodText([
        moodText + angrytext[Math.floor(Math.random() * angrytext.length)],
      ]);
    } else if (text === ACTION.SCHLAEFRIG) {
      setMoodText([
        moodText + sleepytext[Math.floor(Math.random() * sleepytext.length)],
      ]);
    } else if (text === ACTION.BESORGT) {
      setMoodText([
        moodText + worriedtext[Math.floor(Math.random() * worriedtext.length)],
      ]);
    } else if (text === ACTION.GESPRAECHIG) {
      setMoodText([
        moodText + gespraechigtext[Math.floor(Math.random() * gespraechigtext.length)],
      ]);
    } else if (text === ACTION.HILFSBEREIT) {
      setMoodText([
        moodText + hilfsbereittext[Math.floor(Math.random() * hilfsbereittext.length)],
      ]);
    } else if (text === ACTION.ANGETRIEBEN) {
      setMoodText([
        moodText + angetriebentext[Math.floor(Math.random() * angetriebentext.length)],
      ]);
    } else if (text === ACTION.NERVOES) {
      setMoodText([
        moodText + nervoestext[Math.floor(Math.random() * nervoestext.length)],
      ]);
    } else if (text === ACTION.HANDY_EINSTELLUNGEN) {
      setMoodText([
        moodText + handyeinstellungentext[Math.floor(Math.random() * handyeinstellungentext.length)],
      ]);
    } else if (text === ACTION.DRAUSSEN_AUFHALTEND) {
      setMoodText([
        moodText + draussenaufhaltendtext[Math.floor(Math.random() * draussenaufhaltendtext.length)],
      ]);
    } else if (text === ACTION.LAUT) {
      setMoodText([
        moodText + lauttext[Math.floor(Math.random() * lauttext.length)],
      ]);
    } else {
      setMoodText([
        moodText + schwankendegefuehletext[Math.floor(Math.random() * schwankendegefuehletext.length)],
      ]);
    }
  };
  return (
    <React.Fragment>
      <div className=" mood-text text-slate-300 font-bold text-2xl">
        Stimmungen
      </div>
      <div class="m-3 grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8">
        <ButtonElement
          icon={annoyed}
          text={ACTION.GENERVT}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={sad}
          text={ACTION.TRAURIG}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={confirmation}
          disable={disablebutton}
          text={ACTION.SUCHT_BESTAETIGUNG}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={angry}
          text={ACTION.SAUER}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={angry}
          text={ACTION.AUTOAGGRESSIV}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={worried}
          text={ACTION.BESORGT}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={sleepy}
          text={ACTION.SCHLAEFRIG}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={relaxed}
          text={ACTION.ENTSPANNT}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={relaxed}
          text={ACTION.GESPRAECHIG}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={relaxed}
          text={ACTION.HILFSBEREIT}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={relaxed}
          text={ACTION.ANGETRIEBEN}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={relaxed}
          text={ACTION.NERVOES}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={relaxed}
          text={ACTION.DRAUSSEN_AUFHALTEND}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={relaxed}
          text={ACTION.HANDY_EINSTELLUNGEN}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={relaxed}
          text={ACTION.LAUT}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={relaxed}
          text={ACTION.SCHWANKENDE_GEFUEHLE}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
      </div>
    </React.Fragment>
  );
};

export default Mood;
