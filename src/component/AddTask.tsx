import React from "react";
import store from "../store/Store"
import { observer } from 'mobx-react'
import "antd/dist/antd.css";
import { Col, Input, Row } from "antd";

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
    submit(event) {
        store.change(this.state.value)
        this.setState({
            value: ""
        })
        event.preventDefault()
    }

    // @ts-ignore
    change(event) {
        this.setState({
            value: event.target.value
        })
    }
    render() {
        return (
            <Row style={{ width: "100%", justifyContent: "center" }}>
                <Col span={16}>
                <Input
                    placeholder="添加待办事项"
                    allowClear
                    size="large"
                    value={this.state.value}
                    onChange={(event) => this.change(event)}
                    onPressEnter={(event) => this.submit(event)}
                />
                </Col>
            </Row>
            // <form className="add" onSubmit={(e) => { this.submite(e) }}>
            //     <input className="add" value={this.state.value} onChange={e => (this.change(e))} placeholder="添加事项" />
            // </form>
        )
    }
}