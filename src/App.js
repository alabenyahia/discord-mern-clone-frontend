import "./App.css";
import { useEffect, useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import Routes from "./components/Routes";

function App() {
  const { loadUser } = useContext(GlobalContext);
  useEffect(() => {
    loadUser();
  }, []);
  return (
    <div className="app">
      <Routes />
    </div>
  );
}

export default App;
