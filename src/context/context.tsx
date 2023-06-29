import React, { ReactNode, createContext, useContext, useState } from "react";


type ProviderContextProps = {
    createTasks: (text: string) => void;
    deleteTask: (id: number) => void;
    tasksIsCompleted: (id: number) => void;
    tasks: TasksProps[]
}

type TasksProviderProps = {
    children: React.ReactNode;
};


export const TasksContext = createContext<ProviderContextProps>(null!)
type TasksProps = {
    id: number;
    text: string;
    checked: boolean;
}


function TasksProvider(props: TasksProviderProps) {
    const [tasks, setTasks] = useState<TasksProps[]>([])



    function createTasks(text: string) {

        setTasks(prevTasks => [...prevTasks, {
            id: Math.floor(Math.random() * 10000 * 90000),
            text: text,
            checked: false
        }])
    }

    function deleteTask(id: number) {

        const newTasks = tasks.filter(task => task.id !== id)

        setTasks(newTasks)
    }
    async function tasksIsCompleted(id: number) {

        const taskIndex = tasks.findIndex((task) => {
            return task.id == id;
        });

        const tempTasks = [...tasks];

        tempTasks[taskIndex].checked = !tempTasks[taskIndex].checked;

        setTasks(tempTasks);
    }

    return (
        <TasksContext.Provider value={{ createTasks, tasks, deleteTask, tasksIsCompleted }}>
            {props.children}
        </TasksContext.Provider>
    )

}

export default TasksProvider;