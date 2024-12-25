export default function Morgensatz() {
  const morgentext = [
    "Wie geht es dir heute Morgen?",
    "Wie geht es Dir an diesem Tag?",
    "Hast Du gut geschlafen?",
    "Bist Du bereit für diesen Tag?",
  ];
  const maxN = morgentext.length - 1;

  const num = Math.floor(Math.random() * (maxN + 1));

  const sag = morgentext[num];
  return sag;
}

