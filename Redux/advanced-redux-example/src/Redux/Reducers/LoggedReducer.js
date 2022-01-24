export const LoggedReducer = (state = false, action) => {
    if (action.type === "LOGIN") {
        state = true;
    }
    if (action.type === "LOGOUT") {
        state = false;
    }
    return state;
}