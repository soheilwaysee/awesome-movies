import { combineReducers } from "redux";
import apiData from "./reducers/apiData.reducer";
import toast from "./reducers/toast.reducer";

const rootReducer = combineReducers({
  apiData,
  toast
});

export default rootReducer;
