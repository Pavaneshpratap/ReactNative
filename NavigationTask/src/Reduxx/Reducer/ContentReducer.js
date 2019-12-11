import * as Actions from '../Action/actionTypes'
import { Action } from 'rxjs/internal/scheduler/Action'
import DataFetch from '../../Project5';

const ContentReducer = (state = {select:false},action)=>{
    switch(action.type){
        case Actions.IS_SELECTED:
            return {
                select : !state.select
            };
            default :
            return state;
    }
}
export default ContentReducer