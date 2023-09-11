export type Todo = {
    id: number | string;
    title: string;
    completed: boolean;
    date?: any,
    fromTime?:any,
    toTime?:  any,
    userId: number
}

export interface DeleteModalProps {
    isOpen: boolean;
    onClose: () => void;
    onDelete?: () => void;
}

export interface CalenderProps {
    selectedDate: Date;
    setSelectedDate: (date: Date) => void;
    sectionClasses?: string;
    setShowingDatePicker?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface DateListProps {
  date: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
}

export interface AppContextProp {
    children?: React.ReactNode,
    toggleEditTaskVisibility: () => void,
    toggleAddTaskVisibility: () => void,
    deleteTask: (id: number | string) => void,
    editTaskVisible: boolean,
    taskDetailsVisible: boolean,
    addTaskVisible: boolean,
    selectedTask?: Todo | null,
    setSelectedTask: React.Dispatch<React.SetStateAction<Todo | null>>,
    handleCheckbox: (id: number | string) => void,
    handleTaskClick: (id: number | string) => void,
    todos: Todo[],
    addTask : (title: string, fromTime: Date | number | string, toTime:Date | number | string, date: any) => void,
    editTask:(taskId: number | string, updatedTask: Partial<Todo>) => void,
    isAddTaskModalOpen: boolean,
    closeSheet: () => void,
    snapPoints: number[],
    isEditTaskModalOpen: boolean,
    isTaskDetailsModalOpen: boolean,
    formatTime: (timeString:any) => any,
    loading: boolean,
    color: any,
    showCalender: () => void,
    calenderVisible: boolean,
    
}