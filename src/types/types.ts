export type Todo = {
    id: number;
    title: string;
    completed: boolean;
}

export interface AppContextProp {
    children?: React.ReactNode,
    toggleEditTaskVisibility: () => void,
    deleteTask: (id: number) => void,
    editTaskVisible?: boolean ,
    selectedTask?: Todo | null , 
    setSelectedTask: React.Dispatch<React.SetStateAction<Todo | null> >,
    handleCheckbox: (id: number) => void,
    handleTaskClick: (id: number) => void,
    todos: Todo[],
  }