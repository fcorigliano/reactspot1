const React = require('react');
const View = require('./view');
const config = require("nordic/config");
const I18nProvider = require("nordic/i18n/I18nProvider");
const ImageProvider = require("nordic/image/provider");

 
exports.render = function render(req, res) {
  const imagesPrefix = config.assets.prefix;
  const FlexView = (props) => (
    <I18nProvider i18n={req.i18n}>
      <ImageProvider prefix={imagesPrefix}>
        <View {...props} />
      </ImageProvider>
    </I18nProvider>
  );
 
/**
 * Render View
 */
  res.render(FlexView, {
   title: 'Flex',
   translations: req.translations,
   imagesPrefix,
  });
};