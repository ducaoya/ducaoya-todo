import React from "react";
import store from "../store/Store";
import { observer } from "mobx-react";
import DoneItem from "./DoneItem";
import { Divider, Empty, List } from "antd";

@observer
export class Done extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Divider orientation="left">Done</Divider>
        <List bordered={true} size={"large"}>
          {store.doneList.length === 0 ? (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          ) : (
            store.doneList.map((item) => <DoneItem item={item}></DoneItem>)
          )}
        </List>
      </div>
    );
  }
}
