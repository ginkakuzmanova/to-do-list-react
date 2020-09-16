import React from "react";
import TaskContext from "./TaskContext";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import "./App.css";
import Header from "./components/Header";

const App = () => {
    return (
        <TaskContext>
            <div className="container">
                <div className="app-wrapper">
                    <Header/>
                    <div className="main">
                        <TaskForm/>
                        <TaskList/>
                    </div>
                </div>
            </div>
        </TaskContext>
    );
};

export default App