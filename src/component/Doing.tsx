import React from "react";
import store from "../store/Store"
import { observer } from 'mobx-react'
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, List, Row, Typography } from "antd";

@observer
export class Doing extends React.Component<any, any>{
    render() {
        return (
            <div>
            <Divider orientation="left">Doing</Divider>
            <List
            bordered={true}
            size={"large"}
            >
                {store.doingList.map((item) => (
                <List.Item>
                <Row style={{ width: "100%", justifyContent: "space-between" }}>
                    <Col span={3}>
                    <Button
                        onClick={() => {
                        store.left(item);
                        }}
                        type="primary"
                        shape="circle"
                        icon={<DoubleLeftOutlined />}
                    ></Button>
                    </Col>
                    <Col span={15}>
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