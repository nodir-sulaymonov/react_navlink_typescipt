import { type } from 'os';
import React from 'react';

export enum ButtonType {
  BUTTON = 'button',
  RESET = 'reset',
  SUBMIT = 'submit',
}

type ButtonProps = {
  type: ButtonType;
  disabled: boolean;
  onClick: () => void;
  children: JSX.Element[];
};

const Button: React.FC<ButtonProps> = ({
  type,
  disabled,
  onClick,
  children,
}) => {
  return (
    <button type={type} disabled={disabled} onClick={onClick}>
      {' '}
      {children}
    </button>
  );
};

export default Button;
