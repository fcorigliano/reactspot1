const React = require('react');
const PropTypes = require('prop-types');
const { useRef, createRef } = React;

const HomeComponent = ({ i18n }) => {

  function changePositionRight() {
    const sidebar = document.getElementById('sidebar');

    sidebar.classList.remove('bottomNavBar');
    sidebar.classList.remove('leftNavBar');
    sidebar.classList.add('rightNavBar')

  }

  function changePositionLeft() {
    const sidebar = document.getElementById('sidebar');

    sidebar.classList.remove('bottomNavBar');
    sidebar.classList.remove('rightNavBar');
    sidebar.classList.add('leftNavBar')

  }

  function changeHorizontalPosition() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('leftNavBar');
    sidebar.classList.remove('rightNavBar');
    sidebar.classList.add('bottomNavBar');

  }
  return (
    <>
      <nav className='sidebar leftNavBar' id='sidebar'>
        <ul id='ulSidebar'>
          <li><a href="#">Boca Juniors</a></li>
          <li><a href="#">El que nunca descendió</a></li>
          <li><a href="#">El que más copas ganó</a></li>
          <li><a href="#">El que llena en todos lados</a></li>
          <li><a href="#">De La Boca hasta Japón</a></li>
          <li id="leftButton"><a href="#" onClick={changePositionLeft}>Mover a la izquierda</a></li>
          <li id="rightButton" ><a href="#" onClick={changePositionRight}>Mover a la derecha</a></li>
          <li id="bottomButton" ><a href="#" onClick={changeHorizontalPosition}>Mover abajo</a></li>
        </ul>
      </nav>
    </>
  );
};

HomeComponent.propTypes = {
  i18n: PropTypes.shape({
    gettext: PropTypes.func.isRequired,
  }).isRequired,
};


module.exports = HomeComponent;
