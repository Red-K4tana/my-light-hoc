import './App.css';
import {phones} from "./data";
import {PhoneList} from "./components/PhoneList";

function App() {

  return (
    <div className="App">
      <PhoneList phoneData={phones}/>
    </div>
  );
}

export default App;
