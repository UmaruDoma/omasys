import { getZeitpunktNowText } from "../utils";
export default function DisplayTime() {

    //const ddatum = getZeitpunktNowText();
    var ddatum = getZeitpunktNowText();
    setTimeout(ddatum = getZeitpunktNowText(), 1000);
    return (
    <p>
     Heutiges Datum: <important>{ddatum.dday}.{ddatum. dmonth}.{ddatum. dyear}</important> <br/>
     Heute ist : <important> {ddatum.dwochtag }</important><br/>
      ! Es ist jetzt :<important>   {ddatum.dhours}:{ddatum.dminutes} </important> Uhr 
    </p>
    );
 
 
}
