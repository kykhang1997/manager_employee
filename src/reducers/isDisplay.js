import * as Types from '../constants/ActionTypes';
const isdisplayInitialState = false;
const isdisplay = (state = isdisplayInitialState, action) => {
    switch (action.type) {
        case Types.TOGGLE:
            return !state;
        case Types.CLOSE:
            return false;
        default:
            return state
    }
}
export default isdisplay;