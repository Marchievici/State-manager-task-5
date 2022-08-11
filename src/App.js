import { publish } from "./pubsub";
import { Test1 } from "./components/TestComponent";
import { useStore } from "./custom";

function App() {
  let state = useStore(["Increment", "Decrement"]);

  const handleIncrease = () => {
    publish("Increment", state);
  };

  const handleDecrease = () => {
    publish("Decrement", state);
  };

  return (
    <div>
      <button onClick={() => handleDecrease()}>-</button>
      <p>{state}</p>
      <button onClick={() => handleIncrease()}>+</button>
      <Test1 />
    </div>
  );
}

export default App;
