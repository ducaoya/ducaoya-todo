import { DoubleLeftOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Col, List, Modal, Row, Typography } from "antd";
import store from "../store/Store";
import React from "react";

interface Props {
  item: Todo;
}

interface State {
  visible: boolean;
}

export default class DoneItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      visible: false,
    };

    this.showModal = this.showModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  showModal() {
    this.setState({
      visible: true,
    });
  }

  handleDelete() {
    store.del(this.props.item.id);
    this.setState({ visible: false });
  }

  handleCancel() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <List.Item key={this.props.item.id}>
        <Row style={{ width: "100%", justifyContent: "space-between" }}>
          <Col span={3}>
            <Button
              onClick={() => {
                store.left(this.props.item);
              }}
              type="primary"
              shape="circle"
              icon={<DoubleLeftOutlined />}
            ></Button>
          </Col>
          <Col span={15}>
            <Typography.Text>{this.props.item.event}</Typography.Text>
          </Col>
          <Col span={3}>
            <Button
              onClick={() => {
                this.showModal();
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
              onOk={() => this.handleDelete()}
              onCancel={() => this.handleCancel()}
            >
              <p style={{ color: "red" }}>删除后无法恢复，确认删除吗？</p>
            </Modal>
          </Col>
        </Row>
      </List.Item>
    );
  }
}
