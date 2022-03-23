import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import TagId_Reducer from './Redux/Reducers/TagId_Reducer'
import Dashboard from './Screens/main'
import Detail from './Screens/detail'
const appReducer = combineReducers({
  Reducer1: TagId_Reducer
})
const rootReducer = (state, action) => {
  if (action.type === 'DATA_TRANSFER') {
    state = undefined
  }
  return appReducer(state, action)
}

function App() {
  const store = createStore(rootReducer, applyMiddleware(thunk))
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='app-main'>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/campaign" element={<Detail />} />
            {/* <Route path={match.url + "/carnitas"} component={<Detail />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
