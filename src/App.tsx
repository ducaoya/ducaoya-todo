import React from 'react';
import { Doing } from './component/Doing';
import { Todo } from './component/Todo';
import {Done} from "./component/Done";
import { observer } from 'mobx-react'
import {AddTask} from "./component/AddTask";
import { Row, Col } from 'antd';

@observer
export default class App extends React.Component<any, any>{
    render() {
        return (
            <Row style={{ justifyContent: "center" }}>
        <Col span={18}>
          <Row>
            <AddTask></AddTask>
          </Row>
          <Row style={{ width: "100%", justifyContent: "space-between" }}>
            <Col span={7}>
              <Todo></Todo>
            </Col>
            <Col span={8}>
              <Doing></Doing>
            </Col>
            <Col span={8}>
              <Done></Done>
            </Col>
          </Row>
        </Col>
      </Row>
        );
    }
}