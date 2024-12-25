import { getZeitpunktNowText } from "../utils";
export default function Timeblock() {
  const theTime = getZeitpunktNowText();
  return  {theTime};
}
