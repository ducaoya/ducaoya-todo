import React from "react";
import store from "../store/Store"
import { observer } from 'mobx-react'
import "antd/dist/antd.css";
import { Button, Col, Input, Row } from "antd";

interface State {
    value: string,
    name: string
}

@observer
export class AddTask extends React.Component<any, State>{
    // @ts-ignore
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            name: ''
        }
    }
    // @ts-ignore
    submit(event) {
        store.change(this.state.value, this.state.name)
        this.setState({
            value: "",
            name: ""
        })
        event.preventDefault()
    }

    // @ts-ignore
    changeEvent(event) {
        this.setState({
            value: event.target.value
        })
    }

    // @ts-ignore
    changeName(event) {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <Row style={{ width: "100%", justifyContent: "center" }}>
                <Col span={3} style={{ marginRight: '10px' }}>
                    <Input
                        placeholder="姓名"
                        allowClear
                        size="large"
                        value={this.state.name}
                        onChange={(event) => this.changeName(event)}
                    />
                </Col>
                <Col span={12} style={{ marginRight: '10px' }}>
                    <Input
                        placeholder="添加待办事项"
                        allowClear
                        size="large"
                        value={this.state.value}
                        onChange={(event) => this.changeEvent(event)}
                        onPressEnter={(event) => this.submit(event)}
                    />
                </Col>
                <Col span={1} >
                    <Button
                        type="primary"
                        size='large'
                        onClick={(event) => this.submit(event)}
                    >
                        添加
                    </Button>
                </Col>
            </Row>
        )
    }
}