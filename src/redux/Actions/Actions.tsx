
import { ActionType } from './ActionType';


export const incrementLikes = (data: number) => {
    debugger;
    return {
        payload: data,
        type: ActionType.INCREMENT_LIKES
    }
}

export const addLove = (data: number) => {
    debugger;
    return {
        payload: data,
        type: ActionType.ADD_LOVE
    }
}