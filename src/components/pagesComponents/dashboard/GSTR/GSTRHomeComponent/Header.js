import React from 'react';
import PropTypes from 'prop-types';

// TextComponent for rendering text with customizable styles
function TextComponent({ children, className }) {
  return <p className={`text-base font-bold ${className}`}>{children}</p>;
}

TextComponent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

TextComponent.defaultProps = {
  className: 'text-white', // Default color
};

// ColorComponent for handling background and border colors
function ColorComponent({ children, bgColor, borderColor, className }) {
  return (
    <div
      className={`flex flex-wrap gap-5 justify-between py-3 pr-3.5 pl-8 max-w-full border border-solid w-full max-md:pl-5 ${bgColor} ${borderColor} ${className}`}
    >
      {children}
    </div>
  );
}

ColorComponent.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,
  className: PropTypes.string,
};

ColorComponent.defaultProps = {
  bgColor: 'bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600', // Premium gradient background
  borderColor: 'border-blue-500', // Premium border color
  className: '',
};

// Header component using the TextComponent and ColorComponent
function Header() {
  return (
    <header>
      <ColorComponent>
        <TextComponent>AAR PHARMACY(23DNNPS1..)</TextComponent>
        <TextComponent className="my-auto text-white">
          Itax easy private limited
        </TextComponent>
        <div className="flex gap-10">
          <TextComponent>F.Y: 2022-23 (Dec)</TextComponent>
        </div>
      </ColorComponent>
    </header>
  );
}

export default Header;
