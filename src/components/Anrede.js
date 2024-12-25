export default function Anrede() {
  const namen = ["Mama", "Sigrid", "Oma", "Frau Schreiber"];
  const maxN = namen.length - 1;

  const num = Math.floor(Math.random() * (maxN + 1));

  const sag = namen[num];
  return sag;
}
