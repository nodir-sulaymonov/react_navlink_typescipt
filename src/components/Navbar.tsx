import React from 'react';
import Button from './Button';

enum ButtonType {
  BUTTON = 'button',
  RESET = 'reset',
  SUBMIT = 'submit',
}

export const Navbar: React.FC = () => {
  return (
    <>
      {' '}
      <nav>
        <div className="nav-wrapper purple darken-2">
          <a href="/" className="brand-logo">
            React+Typescript
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="/">Sass</a>
            </li>
            <li>
              <a href="/">Components</a>
            </li>
          </ul>
        </div>
      </nav>
      <Button
        disabled={false}
        type={ButtonType.BUTTON}
        onClick={() => console.log('clicked')}
      >
        <span>Button</span>
        <span></span>
      </Button>
    </>
  );
};
