export function getZeitpunktNowText() {
  //console.log(userMessage + " " + new Date().toJSON());
  function derTag (num) {
const wochentag = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag' ];
return wochentag[num];
}
 // var sDate ="test";
  var oDate = new Date();
  if (oDate instanceof Date) {
    var day = oDate.getDate();
    var year = oDate.getYear() + 1900;
    var month =      oDate.getMonth() + 1 < 10        ? "0" + (oDate.getMonth() + 1)        : oDate.getMonth() + 1;
    var minutes =      oDate.getMinutes() < 10 ? "0" + oDate.getMinutes() : oDate.getMinutes();
    var hours = oDate.getHours();
    var seconds =      oDate.getSeconds() < 10 ? "0" + oDate.getSeconds() : oDate.getSeconds();
    var wochentag = derTag(oDate.getDay());
  //  sDate =      day +      "." +      month +      "." +      year +      " --- " +      hours +      ":" +       minutes+      ":" +      seconds;
    //console.log(userMessage + sDate);
    const ddate = {
        dday: day,
        dmonth:month,
        dminutes:minutes,
        dhours:hours,
        dyear:year,
        dwochtag:wochentag
     };
    
    return ddate;
  }
}
