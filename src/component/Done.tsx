import React from "react";
import store from "../store/Store"
import { observer } from 'mobx-react'
import {DeleteOutlined, DoubleLeftOutlined} from "@ant-design/icons";
import {Button, Col, Divider, List, Modal, Row, Typography} from "antd";

@observer
export class Done extends React.Component<any, any>{
    state = {
        visible: false,
      };
    
      showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleDelete = (item:Todo) => {
        store.del(item)
        this.setState({ visible: false });
      };
    
      handleCancel = () => {
        this.setState({ visible: false });
      };    

    render() {
        return (
            <div>
                <Divider orientation="left">Done</Divider>
                <List
                bordered={true}
                size={"large"}
                >
                    {store.doneList.map((item) => {
                    return(
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
                            this.showModal()
                            }}
                            type="primary"
                            shape="circle"
                            icon={<DeleteOutlined />}
                        ></Button>
                        <Modal 
                            title="提醒" 
                            okType="danger"
                            okText="删除"
                            visible={this.state.visible} 
                            onOk={()=>this.handleDelete(item)} 
                            onCancel={()=>this.handleCancel()}>
                            <p style={{color:"red"}}>删除后无法恢复，确认删除吗？</p>
                        </Modal>
                        </Col>
                    </Row>
                    </List.Item>
                )})}
                </List>
      </div>
        );
    }
}