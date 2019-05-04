import { ActionType } from "./ActionType";

export interface IAction {
    type: ActionType;
    payload: any;
}