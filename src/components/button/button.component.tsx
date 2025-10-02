import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: 'default' | 'icon';
  children: ReactNode;
}

export function ButtonComponent({
  appearance = 'default',
  type = 'button',
  children,
  ...props
}: ButtonProps): JSX.Element {
  const styleButton =
    appearance === 'default' ? styles['button-default'] : styles['button-icon'];

  return (
    <button
      className={`${styles.button} ${styleButton}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
