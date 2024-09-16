import { combineReducers, legacy_createStore } from "redux"
import { reducer as counterreducer } from "./counter/reducer"
import { reducer as themereducer } from "./theme/reducer"

const rootreducer = combineReducers({counterreducer,themereducer})
export const store= legacy_createStore(rootreducer)