import { DECREMENT, INCREMENT } from "../Actiontype"

const initialstate = {
    counter: 0
}
export const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case INCREMENT:
            return { counter: state.counter + action.payload }
        case DECREMENT:
            return { counter: state.counter - action.payload }
        default:
            return state
    }
}