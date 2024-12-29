import reactImg from "./assets/react-core-concepts.png";
//import reactImg from "https://www.mariowiki.com/Gallery:Toad#/media/File:Toadsmb2.jpg";
import Timeblock from "./components/Timeblock";
import Anrede from "./components/Anrede";
import DisplayTime from "./components/DisplayTime";
import Buttons from "./components/Buttons";
import  "./grid.css";
import Morgensatz from "./components/Morgensatz";
import 'react-slideshow-image/dist/styles.css'
import Slideshow from "./components/Slideshow";
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




<div class="wrapper">
  <div class="box"><DisplayTime /> </div>
  <div class="box"><dasgruen><p>Hallo <Anrede /> ..... <Morgensatz /><Buttons /></p></dasgruen> </div>
  <div class="box"><p><finished>9:00 Frühstück </finished> <br/><important> 12:00 Es ist jetzt Zeit für  Mittagessen</important><br/>18:00 Abendessen<br/><hr />Morgen<br/>15:00 Friseur</p></div>
  <div class="box"><img src={reactImg} alt="Stylized atom" /></div>

</div>



  );
}

export default App;
