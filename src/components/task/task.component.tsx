import { Trash } from 'phosphor-react';
import { ButtonHTMLAttributes, ReactNode } from 'react';

import { TaskModel } from '../../models';
import { ButtonComponent } from '../button/button.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';

import styles from './task.module.css';

interface TaskProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  task: TaskModel;
  onCheckTask: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
  children: ReactNode;
}

export function TaskComponent({
  task,
  onCheckTask,
  onDeleteTask,
  children,
  ...props
}: TaskProps): JSX.Element {
  const taskTitleStyle = task.isChecked ? styles['task-completed'] : '';

  const handleCheckTask = () => {
    onCheckTask(task.id);
  };

  const handleDeleteTask = () => {
    onDeleteTask(task.id);
  };

  return (
    <div className={`${styles.task} ${taskTitleStyle}`}>
      <CheckboxComponent
        isChecked={task.isChecked}
        handleCheck={handleCheckTask}
      />
      <p>{children}</p>
      <ButtonComponent
        appearance="icon"
        title="Remover tarefa"
        onClick={handleDeleteTask}
        {...props}
      >
        <Trash />
      </ButtonComponent>
    </div>
  );
}
