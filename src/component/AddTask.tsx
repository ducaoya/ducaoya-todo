import React from "react";
import store from "../store/Store"
import { observer } from 'mobx-react'
import "./style.css"
import "antd/dist/antd.css";

interface State {
    value: string
}

@observer
export class AddTask extends React.Component<any, State>{
    // @ts-ignore
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    // @ts-ignore
    submite() {
        store.change(this.state.value)

    }

    // @ts-ignore
    change(event) {
        this.setState({
            value: event.target.value
        })
    }
    render() {
        return (
            <form className="add" onSubmit={() => { this.submite() }}>
                <input className="add" value={this.state.value} onChange={e => (this.change(e))} placeholder="添加事项" />
            </form>
        )
    }
}