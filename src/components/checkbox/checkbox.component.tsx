import { Check } from 'phosphor-react';
import styles from './checkbox.module.css';

interface CheckBoxProps {
  isChecked: boolean;
  handleCheck: () => void;
}

export function CheckboxComponent({
  isChecked,
  handleCheck,
  ...props
}: CheckBoxProps): JSX.Element {
  const checkboxStyle = isChecked
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked'];

  return (
    <div className={styles['checkbox-container']}>
      <label htmlFor="checkbox" onClick={handleCheck}>
        <input readOnly type="checkbox" checked={isChecked} />
        <span className={`${styles.checkbox} ${checkboxStyle}`} {...props}>
          {isChecked && <Check />}
        </span>
      </label>
    </div>
  );
}
