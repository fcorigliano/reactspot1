const React = require("react");
const Script = require("nordic/script");
const serialize = require("serialize-javascript");
const ProductForm = require("../../components/ProductForm");
const ProductItem = require("../../components/ProductItem");
const { useState, useEffect, useRef } = React;

/**
 * View Component Using Page. This is the same component located under pages/demo/view but it uses the Page Component
 */
function View(props) {
  const preloadedState = {
    // csr
  };

  const [products, setProducts] = useState([]);

  return (
    <>
      <Script>
        {`
           window.__PRELOADED_STATE__ = ${serialize(preloadedState, {
             isJSON: true,
           })}
       `}
      </Script>
      {/* Dependencias cargadas en el cliente */}
      <Script src="vendor.js" />
      {/* Carga el archivo de cliente de la pagina */}
      <Script src="productForm.js" />

      <ProductForm setProducts={setProducts} />

      <ProductItem products={products}/>
    </>
  );
}

module.exports = View;
