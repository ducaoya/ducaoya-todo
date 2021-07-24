import React from "react";
import store from "../store/Store";
import { observer } from "mobx-react";
import "antd/dist/antd.css";
import { Button, Col, Input, Row } from "antd";

interface State {
  value: string;
  name: string;
}

@observer
export class AddTask extends React.Component<any, State> {
  // @ts-ignore
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      name: "",
    };
  }
  // @ts-ignore
  submit(event) {
    store.change(this.state.value, this.state.name);
    this.setState({
      value: "",
      name: "",
    });
    event.preventDefault();
  }

  // @ts-ignore
  changeEvent(event) {
    this.setState({
      value: event.target.value,
    });
  }

  // @ts-ignore
  changeName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  render() {
    return (
      <Row
        style={{ width: "100%", justifyContent: "center" }}
        gutter={[16, 16]}
      >
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 14 }}
          lg={{ span: 3 }}
        >
          <Input
            placeholder="姓名"
            allowClear
            size="large"
            value={this.state.name}
            onChange={(event) => this.changeName(event)}
          />
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 14 }}
          lg={{ span: 8 }}
        >
          <Input
            placeholder="添加待办事项"
            allowClear
            size="large"
            value={this.state.value}
            onChange={(event) => this.changeEvent(event)}
            onPressEnter={(event) => this.submit(event)}
          />
        </Col>
        <Col
          xs={{ span: 8 }}
          sm={{ span: 8 }}
          md={{ span: 14 }}
          lg={{ span: 3 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            type="primary"
            size="large"
            style={{ width: "100%" }}
            onClick={(event) => this.submit(event)}
          >
            添加
          </Button>
        </Col>
      </Row>
    );
  }
}
