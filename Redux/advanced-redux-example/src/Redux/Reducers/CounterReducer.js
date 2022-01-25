export const CounterReducer = (state = 0, action) => {
    if (action.type === "INCREASE") {
        return state + 1
    }
    return state
}