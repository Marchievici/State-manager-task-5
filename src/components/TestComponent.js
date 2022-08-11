import { useStore } from "../custom";
import { getState } from "../pubsub";

export const Test1 = () => {
  let state = useStore(["Increment", "Decrement"]);

  return <p>Test: {state}</p>;
};
