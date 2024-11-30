import { createContext, useState } from "react";
import UseFetch from "../hooks/useFetch";

export const GlobalContext = createContext();
export const GlobalProveider = ({ children }) => {
 const [tasks, setTasks] = useState(); 

 const saveTask = (task) => {
   setTasks(task);
 };


 return (
    <GlobalContext.Provider value={{ saveTask, tasks }}>
      {children}
    </GlobalContext.Provider>
 )
};