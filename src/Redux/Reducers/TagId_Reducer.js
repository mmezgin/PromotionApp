const initial_data = {
  data: -1

}
const TagId_Reducer = (state = initial_data, action) => {
  switch (action.type) {
    case 'tagId':
      return { ...state, data: action.payload, error: '' }

    default:
      return state
  }
}
export default TagId_Reducer
