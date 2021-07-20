import React from 'react';
import './App.css';
import { Doing } from './component/Doing';
import { Todo } from './component/Todo';
import {Done} from "./component/Done";
import { observer } from 'mobx-react'
import {AddTask} from "./component/AddTask";

@observer
export default class App extends React.Component<any, any>{
    render() {
        return (
            <React.Fragment>
                <AddTask></AddTask>
                <div className="app">
                    <Todo></Todo>
                    <Doing></Doing>
                    <Done></Done>
                </div>
            </React.Fragment>

        );
    }
}