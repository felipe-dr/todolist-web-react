import { InputHTMLAttributes } from 'react';

import styles from './input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export function InputComponent({
  children,
  ...props
}: InputProps): JSX.Element {
  return <input className={styles.input} type="text" {...props} />;
}
