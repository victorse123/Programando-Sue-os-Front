import { useState } from 'react';
import { Link } from 'react-router-dom';
//import SearchBar from './SearchBar/SearchBar';
import Style from '../header/header.module.css';
//import menu from '../../images/Menu.png';

function Header() {
  // Estado para controlar la visibilidad del menú
  const [menuHo, setMenuHo] = useState(false);

  // Función para alternar la visibilidad del menú
  function handleClick() {
    setMenuHo(!menuHo);
  }
  return (
    <div>
      <div className="header_cont">
        
        {/* Menú de navegación principal */}
        <div className="nav">
          {/* Enlace a tu perfil de GitHub */}
          <a href="https://github.com/victorse123" target="_balck" className="about">GitHub</a>
          {/* Componente de barra de búsqueda */}
          <SearchBar />
        </div>
      </div>
    </div>
  )
}

export default Header;