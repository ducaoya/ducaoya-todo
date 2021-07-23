import React from "react";
import store from "../store/Store";
import { observer } from "mobx-react";
import { CalendarOutlined, DoubleRightOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { Button, Col, Divider, List, Row, Typography } from "antd";

@observer
export class Todo extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Divider orientation="left">Todo</Divider>
        <List bordered={true} size={"large"}>
          {store.todoList.map((item) => (
            <List.Item key={item.id}>
              <Row style={{ width: "100%", justifyContent: "space-between" }}>
                <Col span={2}>
                  <CalendarOutlined />
                </Col>
                <Col span={16}>
                  <Typography.Text>{item.event}</Typography.Text>
                </Col>
                <Col span={3}>
                  <Button
                    onClick={() => {
                      store.right(item);
                    }}
                    type="primary"
                    shape="circle"
                    icon={<DoubleRightOutlined />}
                  ></Button>
                </Col>
              </Row>
            </List.Item>
          ))}
        </List>
      </div>
    );
  }
}
