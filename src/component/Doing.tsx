import React from "react";
import store from "../store/Store"
import { observer } from 'mobx-react'
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
import "./style.css"
import { Button } from "antd";

@observer
export class Doing extends React.Component<any, any>{
    render() {
        return (
            <div className="todo">
                <header className="header">
                    Doing
                </header>
                {store.doingList.map((item) => {
                    return (
                        <div key={item.id} className="todoItem">
                            <Button onClick={() => { store.left(item) }} type="primary" shape='circle' icon={<DoubleLeftOutlined />}></Button>
                            <span>{item.event}</span>
                            <Button onClick={() => { store.right(item) }} type="primary" shape='circle' icon={<DoubleRightOutlined />}></Button>
                        </div>
                    )
                })}
            </div>
        );
    }
}