import { SET_ALERT, REMOVE_ALERT } from "../constants/actionTypes";
import alertReducer from "./alert";

describe("Alert Reducer", () => {
  it("Should return default state", () => {
    const newState = alertReducer(undefined, {});
    expect(newState).toEqual([]);
  });
  it("Should return new state if recieving type", () => {
    const alerts = [{ error: "Test 1" },{ error: "Test 2" }];
    const newState = alertReducer(undefined, {
      type: SET_ALERT,
      payload: alerts,
    });
    expect(newState).toEqual([alerts])
  });
  it("Should return Empty array if recieving type REMOVE_ALERT", () => {
    const alerts = [{ error: "Test 1" },{ error: "Test 2" }];
    const newState = alertReducer(undefined, {
      type: REMOVE_ALERT,
      payload: alerts,
    });
    expect(newState).toEqual([])
  });
});
