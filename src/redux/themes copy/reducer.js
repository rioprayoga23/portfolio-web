import { SET_THEME } from "./constants";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  isActiveTheme: "dark",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_THEME:
      return {
        status: statuslist.success,
        isActiveTheme: action.value,
      };

    default:
      return state;
  }
}
