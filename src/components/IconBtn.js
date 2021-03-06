import React from 'react';
import PropTypes from 'prop-types';
import s from './Todolist.module.css';

const IconBtn = ({ children, onClick, ...allyProps }) => (
  <button type="button" className={s.iconBtn} onClick={onClick} {...allyProps}>
    {children}
  </button>
);

IconBtn.defaultProps = {
  onClick: () => null,
  children: null,
};

IconBtn.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconBtn;
