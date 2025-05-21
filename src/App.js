import "./App.css";
import MainContainer from "./Components/MainContainer";
import {CurrentChatProvider} from "./context/Context";

function App() {
  return (
    <div className="App">
      <CurrentChatProvider>
        <MainContainer />
      </CurrentChatProvider>
    </div>
  );
}

export default App;
