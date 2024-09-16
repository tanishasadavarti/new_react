import { DECREMENT, INCREMENT } from "../Actiontype"

export function IncrementCounter() {
    return { type: INCREMENT, payload: 1 }
}

export function DecrementCounter() {
    return { type: DECREMENT, payload: 1 }
}