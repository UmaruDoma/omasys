import { getZeitpunktNowText } from "../utils";
export default function DisplayTime() {
    ddatum = getZeitpunktNowText();
    
    return (
    <p>
    <p>Heutiges Datum:  {ddatum.dday}      .     {ddatum. dmonth}       .     {ddatum. dyear}</p>
    <p> Heute ist :  {ddatum.dwochtag }</p>
   <p>  ! Es ist jetzt :        {ddatum.dhours} :      {ddatum.dminutes}  Uhr </p></p>
    );
 
 
}
