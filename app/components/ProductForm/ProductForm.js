const React = require("react");
const PropTypes = require("prop-types");
const { useState, useEffect, useRef } = React;

const ProductForm = (props) => {
  const { setProducts } = props;

  const [error, setError] = useState("");

  const form = useRef(null);
  const handleProducts = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const product = {
      id: formData.get("id"),
      name: formData.get("name"),
      price: formData.get("price"),
      description: formData.get("description"),
    };

    let productValue = Object.values(product);

    const error = productValue.some((p) => p === "")
      ? setError("No puede haber campos vacíos")
      : (setProducts((prev) => [...prev, product]),
        form.current.reset(),
        setError(""));

    // console.log(product);
    // console.log(error);
  };

  return (
    <>
      <form ref={form} style={{ width: "500px", margin: "15px 15px" }}>
        <fieldset>
          <legend style={{ fontSize: "20px", fontWeight: "bold" }}>
            Producto
          </legend>
          <label
            htmlFor="id"
            style={{ fontSize: "14px", marginRight: "5px", fontWeight: "bold" }}
          >
            Id
          </label>
          <br />
          <input
            name="id"
            id="id"
            type="text"
            placeholder="MLA19049553"
            style={{
              border: "1px solid",
              borderRadius: "3px",
              width: "200px",
              backgroundColor: "rgb(227, 227, 227, .4)",
              boxShadow: "none",
            }}
            required
          />
          <br />
          <br />
          <label
            htmlFor="name"
            style={{ fontSize: "14px", marginRight: "5px", fontWeight: "bold" }}
          >
            Nombre
          </label>
          <br />
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Gimbal DJI OM4"
            style={{
              border: "1px solid",
              borderRadius: "3px",
              width: "200px",
              backgroundColor: "rgb(227, 227, 227, .4)",
              boxShadow: "none",
            }}
            required
          />
          <br />
          <br />
          <label
            htmlFor="price"
            style={{ fontSize: "14px", marginRight: "5px", fontWeight: "bold" }}
          >
            Precio
          </label>
          <br />
          <input
            name="price"
            id="price"
            type="number"
            placeholder="$29.900"
            style={{
              border: "1px solid",
              borderRadius: "3px",
              width: "200px",
              backgroundColor: "rgb(227, 227, 227, .4)",
              boxShadow: "none",
            }}
            required
          />
          <br />
          <br />
          <label
            htmlFor="description"
            style={{ fontSize: "14px", marginRight: "5px", fontWeight: "bold" }}
          >
            Descripción
          </label>
          <br />
          <textarea
            name="description"
            id="description"
            style={{
              border: "1px solid",
              borderRadius: "3px",
              backgroundColor: "rgb(227, 227, 227, .4)",
              width: "350px",
              height: "75px",
              boxShadow: "none",
              resize: "none",
            }}
            required
          />
          <br />
          <br />
          <button
            type="submit"
            onClick={handleProducts}
            style={{
              backgroundColor: "#008CBA",
              border: "none",
              borderRadius: "7px",
              color: "white",
              textAlign: "center",
              fontSize: "16px",
              padding: "7px 20px",
            }}
          >
            Agregar producto
          </button>
        </fieldset>
      </form>
      <span style={{ color: "red", margin: "15px 15px" }}>{error}</span>
    </>
  );
};

module.exports = ProductForm;
