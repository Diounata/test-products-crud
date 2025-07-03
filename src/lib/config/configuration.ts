import { paths } from "./paths";

enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

export const configuration = {
  defaultTheme: Theme.DARK,
  paths,
};
