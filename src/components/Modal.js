import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Todolist.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');

    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');

    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      console.log('Нажали на ESC');

      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.modalBackdrop} onClick={this.handleBackdropClick}>
        <div className={s.modalContent}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}
