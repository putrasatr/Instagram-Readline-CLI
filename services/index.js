const initialState = {
    data: false,
    message: undefined
}
const services = (state, action) => {
    const { type, data } = action
    switch (type) {
        case "GET_DATA":
            return {
                ...state,
                data
            }

        default:
            return state
    }
}
module.exports = { services }