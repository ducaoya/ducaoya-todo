import React from "react";
import { Doing } from "./component/Doing";
import { Todo } from "./component/Todo";
import { Done } from "./component/Done";
import { observer } from "mobx-react";
import { AddTask } from "./component/AddTask";
import { Row, Col } from "antd";

@observer
export default class App extends React.Component<any, any> {
  render() {
    return (
      <Row style={{ justifyContent: "center" }}>
        <Col span={18}>
          <Row>
            <AddTask></AddTask>
          </Row>
          <Row
            style={{ width: "100%", justifyContent: "space-between" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 8 }}
            >
              <Todo></Todo>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 8 }}
            >
              <Doing></Doing>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 8 }}
            >
              <Done></Done>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
