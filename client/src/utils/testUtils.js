import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers";
import thunk from 'redux-thunk'

const middleware = [thunk]

const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
);

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const testStore = (initialState) => {
  const createStoreWithMiddleWare = applyMiddleware(...middleware)(createStore);
  return createStoreWithMiddleWare(rootReducer, initialState);
};

export { ReduxProvider };
