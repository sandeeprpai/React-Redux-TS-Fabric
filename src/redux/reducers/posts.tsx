import { IAction } from '../Actions/Action';
import { ActionType } from '../Actions/ActionType';

const posts = (state = [], action: IAction) => {
    debugger;
    switch (action.type) {
        case ActionType.INCREMENT_LIKES: {
            debugger; const i = action.payload;
            return [
                ...state.slice(0, i), // before the one we are updating
                { ...state[i], likes: state[i].likes + 1 },
                ...state.slice(i + 1), // after the one we are updating
            ]
        }
        case ActionType.ADD_LOVE: {
            debugger; const i = action.payload;

            if (state[i].love === "♡") {
                return [
                    ...state.slice(0, i), // before the one we are updating
                    { ...state[i], love: "❤" },
                    ...state.slice(i + 1), // after the one we are updating
                ]
            }
            else if (state[i].love === "❤") {
                return [
                    ...state.slice(0, i), // before the one we are updating
                    { ...state[i], love: "♡" },
                    ...state.slice(i + 1), // after the one we are updating
                ]
            }

        }
        default:
            debugger;
            return state;
    }

}


// export const combinedReducers = combineReducers({incrementReducer});

export default posts;