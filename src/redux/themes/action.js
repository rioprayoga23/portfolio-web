import { SET_THEME } from "./constants";

export const setTheme = (value) => {
  return {
    type: SET_THEME,
    value,
  };
};
