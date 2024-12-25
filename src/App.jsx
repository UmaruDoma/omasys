import "./index.css";
import Timeblock from "./components/Timeblock";
import Anrede from "./components/Anrede";
import Morgensatz from "./components/Morgensatz";
export default function App() {
  //const du = Anrede();
  return (
    <div className="App">
      <h1>
        Hallo <Anrede />
      </h1>
      <h2>
        <Morgensatz />
      </h2>
      <Timeblock />
    </div>
  );
}
