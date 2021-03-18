import "./App.css";
import Home from "./components/Home";
import { useEffect, useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

function App() {
  const { loadUser } = useContext(GlobalContext);
  useEffect(() => {
    loadUser();
  }, []);
  return (
    <div className="app">
      <Home />
    </div>
  );
}

export default App;
