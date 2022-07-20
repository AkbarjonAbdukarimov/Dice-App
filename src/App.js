import "./App.css";
import Die from "./die";
function App() {
  return (
    <div className="App">
      <Die face="five" />
      <Die face="two" />
      <Die face="four" />
      <Die face="six" />
      <Die face="three" />
    </div>
  );
}

export default App;
