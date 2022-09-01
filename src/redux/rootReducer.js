

import { combineReducers } from "redux";
import filtersReducer from "./filters/reducer";
import searchReducer from "./search/reducer";

const rootReducer = combineReducers({

    search : searchReducer,
    filter : filtersReducer, 
});

export default rootReducer;