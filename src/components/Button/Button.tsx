import './Button.css';

import React, { FC, PropsWithChildren } from 'react';

import { classNames } from '../../utils/classNames.ts';

export enum EButtonVariant {
  Success = 'Success',
  Error = 'Error',
}

export type ButtonProps = PropsWithChildren<React.JSX.IntrinsicElements['button']> & {
  variant?: EButtonVariant;
};

const Button: FC<ButtonProps> = ({ children, className, variant, ...props }) => {
  return (
    <button
      className={classNames('Button', className, {
        'Button--Success': variant === EButtonVariant.Success,
        'Button--Error': variant === EButtonVariant.Error,
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
