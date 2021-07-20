import React from "react";
import store from "../store/Store"
import { observer } from 'mobx-react'
import {DeleteOutlined, DoubleLeftOutlined} from "@ant-design/icons";
import "./style.css"
import {Button} from "antd";

@observer
export class Done extends React.Component<any, any>{
    render() {
        return (
            <div className="todo">
                <header className="header">
                    Done
                </header>
                {store.doneList.map((item)=>{
                    return (
                        <div key={item.id} className="todoItem">
                            <Button onClick={()=>{store.left(item)}} type="primary"  shape='circle' icon={<DoubleLeftOutlined /> }></Button>
                            <span>{item.event}</span>
                            <Button onClick={()=>{store.del(item)}} type="primary"  shape='circle' icon={<DeleteOutlined /> }></Button>
                        </div>
                    )
                })}
            </div>
        );
    }
}