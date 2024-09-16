import { THEME } from "../Actiontype";

export const setTheme = (theme) => ({
    type: THEME,
    payload: theme,
  });