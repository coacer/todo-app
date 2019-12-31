import { Action } from "redux";

export enum ActionTypes {
  REQUEST = "REQUEST",
  SUCCESS = "SUCCESS",
}

interface RrquestAction extends Action {
  type: ActionTypes.REQUEST;
}

interface SuccessAction extends Action {
  type: ActionTypes.SUCCESS;
}

export type LoadAction =
  | RrquestAction
  | SuccessAction;
