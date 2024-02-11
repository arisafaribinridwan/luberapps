import { defaultConfig } from "@formkit/vue";
import { createFloatingLabelsPlugin } from "@formkit/addons";
import { rootClasses } from "./formkit.theme.mjs";
import "@formkit/addons/css/floatingLabels";

export default defaultConfig({
  plugins: [
    createFloatingLabelsPlugin({
      useAsDefault: true, // defaults to false
    }),
  ],
  config: {
    rootClasses,
  },
});
