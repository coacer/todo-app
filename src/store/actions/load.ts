import { Action } from "redux";

export enum ActionTypes {
  REQUEST = "REQUEST",
  SUCCESS = "SUCCESS",
}

interface RrquestAction extends Action {
  type: ActionTypes.REQUEST;
  payload: boolean;
}

interface SuccessAction extends Action {
  type: ActionTypes.SUCCESS;
  payload: boolean;
}

export type LoadAction =
  | RrquestAction
  | SuccessAction;
