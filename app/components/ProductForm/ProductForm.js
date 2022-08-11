const React = require("react");
const PropTypes = require("prop-types");
const { useState, useEffect, useRef } = React;

const ProductForm = (props) => {
  const { setProducts } = props;

  const [error, setError] = useState('');
  
  const form = useRef(null);
  const handleProducts = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const product = {
      id: formData.get("id"),
      nombre: formData.get("nombre"),
      precio: formData.get("precio"),
      descripcion: formData.get("descripcion"),
    };

    let productValue = Object.values(product);

    const error = productValue.some(p => p === '') ? setError('no pueden haber campos vacíos') : (setProducts(prev => [...prev, product]), form.current.reset(), setError(''));

    // console.log(product);
    // console.log(error);
  };

  return (
    <>
      <form ref={form}>
        <fieldset>
          <legend>Producto</legend>
          <label htmlFor="id">Id</label>
          <input
            name="id"
            id="id"
            type="text"
            placeholder="Inserte Id"
            required
          />
          <br />
          <br />
          <label htmlFor="nombre">Nombre</label>
          <input
            name="nombre"
            id="nombre"
            type="text"
            placeholder="Inserte nombre"
            required
          />
          <br />
          <br />
          <label htmlFor="precio">Precio</label>
          <input
            name="precio"
            id="precio"
            type="number"
            placeholder="Inserte precio"
            required
          />
          <br />
          <br />
          <label htmlFor="descripcion">Descripción</label>
          <input
            name="descripcion"
            id="descripcion"
            type="textarea"
            placeholder="Inserte descripción"
            required
          />
          <br />
          <br />
          <button type="submit" onClick={handleProducts}>
            Agregar producto
          </button>
        </fieldset>
      </form>
      <span style={{color: 'red'}}>{error}</span>
    </>
  );
};

module.exports = ProductForm;
