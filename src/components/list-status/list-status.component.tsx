import { TaskModel } from '../../models';

import styles from './list-status.module.css';

interface ListStatusComponentProps {
  tasks: TaskModel[];
}

export function ListStatusComponent({
  tasks = [],
}: ListStatusComponentProps): JSX.Element {
  const tasksTotal = tasks.length;
  const completedTasksTotal = tasks.filter((task) => task.isChecked).length;

  const listStatusStyle =
    tasksTotal === 0 ? styles['list-status-border-bottom'] : '';

  const handleCompletedTasksStatus = (completedTasks: number) => {
    if (completedTasks === 0) {
      return 0;
    }

    return `${completedTasks} de ${tasksTotal}`;
  };

  return (
    <header className={`${styles['list-status']} ${listStatusStyle}`}>
      <aside className={styles['list-status-created-tasks']}>
        Tarefas criadas
        <span className={styles['list-status-count']}>{tasksTotal}</span>
      </aside>
      <aside className={styles['list-status-done-tasks']}>
        Concluídas
        <span className={styles['list-status-count']}>
          {handleCompletedTasksStatus(completedTasksTotal)}
        </span>
      </aside>
    </header>
  );
}
