import { getZeitpunktNowText } from "../utils";
export default function DisplayTime() {
    const ddatum = getZeitpunktNowText();
    
    return (
    <p>
     Heutiges Datum: {ddatum.dday}.{ddatum. dmonth}.{ddatum. dyear} <br/>
     Heute ist :  {ddatum.dwochtag }<br/>
      ! Es ist jetzt :        {ddatum.dhours} :      {ddatum.dminutes}  Uhr 
    </p>
    );
 
 
}
