import React from "react";
import store from "../store/Store"
import { observer } from 'mobx-react'
import {DoubleRightOutlined} from "@ant-design/icons";
import "./style.css"
import "antd/dist/antd.css";
import {Button} from "antd";

@observer
export class Todo extends React.Component<any, any>{
    render() {
        return (
            <div className="todo">
                <header className="header">
                    Todo
                </header>
                {store.todoList.map((item)=>{
                    return (
                        <div key={item.id} className="todoItem">
                            <span>{item.event}</span>
                            <Button onClick={()=>{store.right(item)}} type="primary"  shape='circle' icon={ <DoubleRightOutlined  />}></Button>
                        </div>
                    )
                })}
            </div>
        );
    }
}