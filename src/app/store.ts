
import { tassign } from "tassign";
import { INCREMENT } from "./action";
import { Map } from "immutable";


export interface IAppState {
    counter: number;
    // messaging?: {
    //     newMessage: number;
    // }

}

export const INITIAL_STATE: IAppState = {
    counter: 0,
    // messaging: {
    //     newMessage: 5
    // }
}

export function rootReducer(state: Map<string, any>, action: any):Map<string, any> {
    switch (action.type) {
        case INCREMENT : 
        //return { counter: state.counter + 1};
        //return Object.assign({}, state, {counter: state.counter + 1, isOnline: true});
        
        //return tassign(state, {counter: state.counter + 1});
        state.set('isOnline',true);
        return state.set('counter', state.get('counter')+ 1);
    }
    
    return state;
}