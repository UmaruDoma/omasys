import reactImg from "./assets/react-core-concepts.png";
import Timeblock from "./components/Timeblock";
import Anrede from "./components/Anrede";
import Morgensatz from "./components/Morgensatz";
function App() {
  return (
    <div>
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>Hallo <Anrede /></h1>
        <p>
           <Morgensatz />
        </p>
      </header>
      <main>
        <h1> <Timeblock /> </h1>
      </main>
    </div>
  );
}

export default App;
