import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
const combineReducer=combineReducers({
    cart:cartReducer
})
export default combineReducer