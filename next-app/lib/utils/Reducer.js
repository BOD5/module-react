const setStateAndLocalStorage = (currentState) => {
  localStorage.setItem('state', JSON.stringify(currentState));
  return currentState;
}

const Reducer = (state, action) => {
  switch(action.type) {
    case "create-user":
      return setStateAndLocStorage({
        ...state,
        pageView: state.pageView + action.count 
      })
    case "log-in": 
      return setStateAndLocStorage({
        ...state,
        count: state.count + 1,
        message: action.message
      })
    case "log-out":
      return setStateAndLocStorage({
        ...state,
        count: state.count - 1,
        message: action.message
      })
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export default Reducer;