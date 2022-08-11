const React = require('react');
const View = require('./view');
 
/**
 * Fetch Site data example
 */
// const serviceName = require('../../../services/service_name');
// exports.functionName = function functionName(req, res, next) {
//  serviceName.getSite(req.platform.siteId).then((data) => {
//     res.locals.site = data;
//     next();
//   }).catch(err => next(err));
// };
 
exports.render = function render(req, res) {
  const ProductForm = (props) => <View {...props} />;
 
/**
 * Render View
 */
  res.render(ProductForm, {
  });
};