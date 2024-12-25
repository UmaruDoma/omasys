import { getZeitpunktNowText } from "../utils";
export default function Timeblock() {
var sDate ="test";
  var oDate = new Date();
  if (oDate instanceof Date) {
    var day = oDate.getDate();
    var year = oDate.getYear() + 1900;
    var month =      oDate.getMonth() + 1 < 10        ? "0" + (oDate.getMonth() + 1)        : oDate.getMonth() + 1;
    var minutes =      oDate.getMinutes() < 10 ? "0" + oDate.getMinutes() : oDate.getMinutes();
    var hours = oDate.getHours();
    var seconds =      oDate.getSeconds() < 10 ? "0" + oDate.getSeconds() : oDate.getSeconds();
    sDate =      day +      "." +      month +      "." +      year +      " --- " +      hours +      ":" +       minutes+      ":" +      seconds;
    //console.log(userMessage + sDate);
    return sDate;
  //const theTime = getZeitpunktNowText();
  //return  {theTime};
  }
}
