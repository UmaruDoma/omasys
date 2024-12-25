import reactImg from "./assets/react-core-concepts.png";
import Timeblock from "./components/Timeblock";
import Anrede from "./components/Anrede";
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
	  <div id="title">Hallo <Anrede /> ..... <Morgensatz /> <p><Timeblock /> </p></div>
	  <div id="score">Wir kommen gleich vorbei</div>
	  <div id="stats"><p>Heute</p><p>9:00 Frühstück</p><p>12:00 Es ist jetzt Zeit für  Mittagessen</p><p>18:00 Abendessen</p><p>Morgen</p><p>9:00 Frühstück</p><p>12:00 Mittagessen</p><p>15:00 Friseur</p><p>18:00 Abendessen</p></div>
	  <div id="board"><img src={reactImg} alt="Stylized atom" /></div>
	  <div id="controls"><p><dasrot>Hallo</dasrot></p><p><dasgelb>Hallo hier</dasgelb></p></div>
	</div>
  );
}

export default App;
