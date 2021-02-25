import { Subject } from "rxjs";

const subject = new Subject();

const initialState = {
  temperatures: [],
  newTemperatures: 0,
};

let state = initialState;

const temperaturesStore = {
  init: () => {
    state = { ...state, newTemperatures: 0 };
    subject.next(state);
  },
  subscribe: (setState) => subject.subscribe(setState),
  sendTemperature: (temp) => {
    console.log("messenger", temp);
    state = {
      ...state,
      temperatures: [...state.temperatures, temp],
      newTemperatures: state.newTemperatures + 1,
    };
    subject.next(state);
  },
  initialState,
};

export default temperaturesStore;
