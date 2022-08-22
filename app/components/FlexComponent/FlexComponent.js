const React = require('react');
const PropTypes = require('prop-types');

const FlexComponent = ({ i18n }) => {

  return (
    <>
      <div className='container'>
        <div className='box box1'>1</div>
        <div className='box box2'>2</div>
        <div className='box box3'>3</div>
        <div className='box box4'>4</div>
      </div>
    </>
  );
};

FlexComponent.propTypes = {
  i18n: PropTypes.shape({
    gettext: PropTypes.func.isRequired,
  }).isRequired,
};


module.exports = FlexComponent;
