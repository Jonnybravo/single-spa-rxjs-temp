import { Subject } from "rxjs";

const subject = new Subject();

const initialState = {
  appList: []
};

let state = initialState;


const AppStore = { 
    init: async (data) => {
      const list = data ? data : state.appList
      state = { ...state, appList: list };
      subject.next(state);
    },
    subscribe: (setState) => subject.subscribe(setState),
    getData: () => state,
    pathList: (data)  => {
          state = {
            ...state,
            appList: data
          };
          subject.next(state);
         
    },
    initialState,
  };

  export default AppStore;
  