const React = require("react");

const ProductItem = (props) => {
  const { products } = props;

  return (
    <>
      <pre style={{ margin: "15px 15px" }}>
        {JSON.stringify(products, null, 2)}
      </pre>
    </>
  );
};

module.exports = ProductItem;
