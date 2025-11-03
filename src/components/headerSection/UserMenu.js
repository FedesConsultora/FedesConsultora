import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const UserMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t } = useTranslation(); 

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="user_div">
      <div className="dropdown" onClick={toggleDropdown}>
        <button
          className="dropdown-toggle btn d-flex align-items-center"
          type="button"
          aria-expanded={isDropdownOpen}
        >
          <div className="user_img_container">
            <img
              className="userImg"
              src="https://fedesconsultora.com/fedes-consultora/landing/iconoUserBlack.png"
              alt="Ícono de usuario de Fedes Consultora"
              width="20"
            />
            <img
              className="arrow"
              src="https://fedesconsultora.com/fedes-consultora/landing/flecha_abajo_azul.svg"
              alt="Flecha desplegable"
              height="13"
            />
          </div>
        </button>
        {isDropdownOpen && (
          <div className="dropdown-menu dropdown-menu-end">
            <a href="/my/home" className="dropdown-item uno">
              {t('profile')} <i className="fa fa-id-card-o" />
            </a>
            <a href="/my/home" className="dropdown-item dos">
              {t('applications')} <i className="fa fa-id-card-o" />
            </a>
            <a href="/web/session/logout?redirect=/" className="dropdown-item">
              {t('logout')} <i className="fa fa-sign-out" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
