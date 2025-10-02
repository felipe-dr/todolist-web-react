import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';

import {
  ButtonComponent,
  EmptyListComponent,
  HeaderComponent,
  InputComponent,
  ListStatusComponent,
  TaskComponent,
} from './components';

import { TaskModel } from './models';

import styles from './app.module.css';
import './styles/main.css';

const taskList: TaskModel[] = [
  { id: uuid(), title: 'Estudar JavaScript aos domingos.', isChecked: false },
  {
    id: uuid(),
    title: 'Fazer a prova de Clean Code em 03/10/2025.',
    isChecked: false,
  },
  {
    id: uuid(),
    title: 'Ir para a academia na quinta-feira.',
    isChecked: true,
  },
];

export function App() {
  const [tasks, setTasks] = useState<TaskModel[] | []>(taskList);
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');

  const isNewTaskEmpty = newTaskTitle.length === 0;

  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('');

    setNewTaskTitle(event.target.value);
  };

  const handleNewTaskInvalid = (event: InvalidEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('Esse campo é obrigatório.');
  };

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault();

    const newTask: TaskModel = {
      id: uuid(),
      title: newTaskTitle,
      isChecked: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
  };

  const onCheckTask = (taskId: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isChecked: !task.isChecked };
      }

      return { ...task };
    });

    setTasks(updatedTasks);
  };

  const onDeleteTask = (taskId: string) => {
    if (confirm('Tem certeza que deseja remover essa tarefa?')) {
      const tasksWithoutDeletedTask = tasks.filter(
        (task) => task.id !== taskId
      );

      setTasks(tasksWithoutDeletedTask);
    }
  };

  return (
    <main>
      <HeaderComponent />
      <section className="container">
        <form
          className={styles['todo-new-task-bar']}
          onSubmit={handleCreateNewTask}
        >
          <InputComponent
            name="task"
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTaskChange}
            value={newTaskTitle}
            onInvalid={handleNewTaskInvalid}
            required
          />
          <ButtonComponent type="submit" disabled={isNewTaskEmpty}>
            Criar <PlusCircle />
          </ButtonComponent>
        </form>
        <ListStatusComponent tasks={tasks} />
        {tasks.length === 0 ? (
          <EmptyListComponent className={styles['todo-empty-list']} />
        ) : (
          <div className={styles['todo-tasks-list']}>
            {tasks.map((task) => (
              <TaskComponent
                key={task.id}
                task={task}
                onCheckTask={onCheckTask}
                onDeleteTask={onDeleteTask}
              >
                {task.title}
              </TaskComponent>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
