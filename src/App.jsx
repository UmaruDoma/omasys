import reactImg from "./assets/react-core-concepts.png";
import Timeblock from "./components/Timeblock";
import Anrede from "./components/Anrede";
import DisplayTime from "./components/DisplayTime";
import  "./grid.css";
import Morgensatz from "./components/Morgensatz";
function App() {
  return (
 //   <div>
 //     <header>
 //        <img src={reactImg} alt="Stylized atom" />
 //        <h1>Hallo <Anrede /></h1>
 //        <p>
 //           <Morgensatz />
  //       </p>
  //     </header>
  //     <main>
  //       <h1> Heute : <Timeblock /> </h1>
  //     </main>
 //   </div>
    <div id="grid">
	  <div id="obenlinks"><p>Hallo <Anrede /> ..... <Morgensatz /></p> <p><DisplayTime /> </p></div>
	  <div id="untenlinks"><p>Wir kommen gleich vorbei</p></div>
	  <div id="mittelinks"><p>Heute</p><p>9:00 Frühstück <br/> 12:00 Es ist jetzt Zeit für  Mittagessen<br/>18:00 Abendessen<br/>Morgen<br/>9:00 Frühstück<br/>12:00 Mittagessen<br/>15:00 Friseur<br/>18:00 Abendessen</p></div>
	  <div id="obenmitterechts"><img src={reactImg} alt="Stylized atom" /></div>
	  <div id="untenrechts"><p><dasrot>Hallo</dasrot></p><p><dasgelb>Hallo hier</dasgelb></p></div>
	</div>
  );
}

export default App;
