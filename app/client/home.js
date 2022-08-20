/**
 * Styles
 */
require("../pages/home/styles.scss");

/**
 * Module dependencies
 */
const React = require("react");
const hydrate = require("nordic/hydrate");
const I18n = require("nordic/i18n");
const I18nProvider = require("nordic/i18n/I18nProvider");
const ImageProvider = require("nordic/image/provider");
const HomeView = require("../pages/home/view");

/**
 * Get server state
 */
const {
  title,
  translations,
  imagesPrefix
} = window.__PRELOADED_STATE__;

/**
 * i18n
 */
const i18n = new I18n({ translations });

/**
 * Mount DemoView on client
 */
hydrate(
  <I18nProvider i18n={i18n}>
    <ImageProvider prefix={imagesPrefix}>
      <HomeView
        title={title}
      />
    </ImageProvider>
  </I18nProvider>,
  document.getElementById("root-app")
);
