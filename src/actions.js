export default function actionsSwitch(evName, state) {
  switch (evName) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    default:
      return state;
  }
}
