import { create } from "@storybook/theming";
import beemLogo from "./logo-blue.png";

export default create({
  colorPrimary: 'hotpink',
  colorSecondary: 'deepskyblue',
  base: "light",
  brandTitle: "Beem Components",
  brandImage: beemLogo,
});
