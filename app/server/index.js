/**
 * Module dependencies
 */
const router = require("nordic/ragnar").router();
const config = require("nordic/config");
const { layoutMiddleware } = require("nordic/layout");
const i18nMiddleware = require("nordic/i18n/middleware");
const polyfillsMiddleware = require("nordic/script/polyfills-middleware");
/**
 * Set up mocks
 */
require("../../mocks");

/**
 * Routers
 */
const home = require("../pages/home");
const demoRoute = require("../pages/demo");
const productList = require("../pages/productList");
const productForm = require("../pages/productForm");
const flex = require("../pages/flex");

/**
 * Use global middlewares
 */
router.use(layoutMiddleware());
router.use(i18nMiddleware(config.i18n));
router.use(polyfillsMiddleware(config.polyfillLimits));

/**
 * Redirect
 */
router.get("/", (req, res) => res.redirect(`${config.ragnar.basePath}demo`));

/**
 * Mount routers
 */
router.use("/home", home);
router.use("/demo", demoRoute);
router.use("/productList", productList);
router.use("/productForm", productForm);
router.use("/flex", flex);
/**
 * Expose router
 */
module.exports = router;
