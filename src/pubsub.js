import actionsSwitch from "./actions";

const events = {};

let state = {
  counterState: 0,
};

export const getState = () => {
  return state;
};

export const subscribe = (evName, callback) => {
  events[evName] = events[evName] || [];
  events[evName].push(callback);
};

export const publish = (evName, state) => {
  const newState = actionsSwitch(evName, state);
  if (events[evName]) {
    events[evName].forEach((func) => func(newState));
  }
};

export const unsubscribe = (evName, callback) => {
  if (events[evName]) {
    events[evName] = events[evName].filter((func) => func !== callback);
  }
};
