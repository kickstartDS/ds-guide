import { actions } from "@storybook/addon-actions";
import { DocsContainer } from "@storybook/addon-docs";

import "@kickstartds/base/lib/global/base.js";
import "@kickstartds/base/lib/global/base.css";

import IconSprite from "../src/token/icons/IconSprite";

import "../src/token/tokens.css";

const myActions = actions("radio");
window._ks.radio.on("*", myActions.radio);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort(a, b) {
      // welcome page to top!
      if (a[0].includes("welcome")) {
        return -1;
      }

      // alphabetically
      return a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true });
    },
  },
  designToken: {
    disable: true,
  },
  docs: {
    container: (props) => (
      <>
        <IconSprite />
        <DocsContainer {...props} />
      </>
    ),
  },
};

export const decorators = [
  (Story) => (
    <>
      <IconSprite />
      <Story />
    </>
  ),
];