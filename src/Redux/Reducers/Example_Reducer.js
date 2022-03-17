const initial_data = {
  data: null

}
const Example_Reducer = (state = initial_data, action) => {
  switch (action.type) {
    case 'example':
      return { ...state, data: action.payload, error: '' }

    default:
      return state
  }
}
export default Example_Reducer
