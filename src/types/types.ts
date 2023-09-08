export type Todo = {
    id: number;
    title: string;
    completed: boolean;
    date?: Date | number,
    fromTime?: Date | number,
    toTime?:  Date | number,
    userId: number
}

export interface AppContextProp {
    children?: React.ReactNode,
    toggleEditTaskVisibility: () => void,
    toggleAddTaskVisibility: () => void,
    deleteTask: (id: number) => void,
    editTaskVisible?: boolean,
    taskDetailsVisible?: boolean,
    addTaskVisible?: boolean,
    selectedTask?: Todo | null,
    setSelectedTask: React.Dispatch<React.SetStateAction<Todo | null>>,
    handleCheckbox: (id: number) => void,
    handleTaskClick: (id: number) => void,
    todos: Todo[],
}