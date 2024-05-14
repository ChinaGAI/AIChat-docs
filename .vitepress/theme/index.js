import DefaultTheme from "vitepress/theme";
import MyLayout from "./components/Layout.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  layout: MyLayout,
};
