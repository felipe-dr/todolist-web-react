import { ComponentProps } from 'react';
import styles from './empty-list.module.css';

interface EmptyListComponentProps extends ComponentProps<'div'> {}

export function EmptyListComponent({
  className,
}: EmptyListComponentProps): JSX.Element {
  return (
    <div className={`${styles['empty-list']} ${className}`}>
      <img
        src="/images/clipboard.png"
        width="56"
        height="56"
        alt="Imagem de uma prancheta"
      />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
