import { useState, useEffect } from "react";
import { getState, subscribe, unsubscribe } from "./pubsub";

export const useStore = (array) => {
  const [state, setState] = useState(getState().counterState);
  const callback = (newState) => setState(newState);

  useEffect(() =>
    array.forEach((ev) => {
      subscribe(ev, callback);
        // unsubscribe("Increment", callback);
    })
  );

  return state;
};
