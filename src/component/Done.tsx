import React from "react";
import store from "../store/Store"
import { observer } from 'mobx-react'
import {DeleteOutlined, DoubleLeftOutlined} from "@ant-design/icons";
import {Button, Col, Divider, List, Row, Typography} from "antd";

@observer
export class Done extends React.Component<any, any>{
    render() {
        return (
            <div>
                <Divider orientation="left">Done</Divider>
                <List
                bordered={true}
                size={"large"}
                >
                    {store.doneList.map((item) => (
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
                            store.del(item);
                            }}
                            type="primary"
                            shape="circle"
                            icon={<DeleteOutlined />}
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