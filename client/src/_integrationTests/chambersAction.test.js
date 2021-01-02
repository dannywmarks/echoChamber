import moxios from "moxios";
import { testStore } from "../utils/testUtils";
import { getChambers } from "../actions/chambers";

// Mock an Axios request to make sure the store is updated properly

describe("getChambers action", () => {
  beforeEach(() => {
    moxios.install();
    moxios.stubRequest("http://localhost:5000/chambers", {
      status: 200,
      response: [{
        title: "Example title 1",
        create: "Test User 1",
      },
      {
        title: "Example title 2",
        create: "Test User 2",
      },],
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("Store is updated correctly", () => {
    const expectedState = [
      {
        title: "Example title 1",
        create: "Test User 1",
      },
      {
        title: "Example title 2",
        create: "Test User 2",
      },
    ];
    const store = testStore();
  

    return store.dispatch(getChambers()).then(() => {
      const newState = store.getState();
      expect(newState.chambers).toEqual(expectedState);
    });
  });
});
