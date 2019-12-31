import { LoadAction, ActionTypes } from "../actions/load";

const initialState = false;

const loadReducer = (state = initialState, action: LoadAction): boolean => {
  switch(action.type) {

    case ActionTypes.REQUEST:
      return true;

    case ActionTypes.SUCCESS:
      return false;

    default:
      return state;
  }
};

export default loadReducer;
