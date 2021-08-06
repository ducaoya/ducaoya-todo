import { message } from "antd";
import { action, computed, makeAutoObservable } from "mobx";
import { del, get, post, put } from "../ts/request";
import { configure } from "mobx";

configure({
  enforceActions: "never",
});

class Store {
  todoList: Todo[] = [];
  doingList: Todo[] = [];
  doneList: Todo[] = [];
  url: string = "/list";
  event: string = "";

  @computed
  change(value: string, name: string) {
    this.event = `${name}：${value}`;
    if (value === "" || name === "") {
      message.error("姓名或者事项不能空！");
    } else {
      this.add();
    }
  }

  //更新数据数据
  @action.bound
  setData() {
    let res = get(this.url);
    res.then((data) => {
      this.todoList = [];
      this.doingList = [];
      this.doneList = [];
      // @ts-ignore
      data.forEach((item: Todo) => {
        if (item.status === 0) {
          this.todoList.push(item);
        } else if (item.status === 1) {
          this.doingList.push(item);
        } else if (item.status === 2) {
          this.doneList.push(item);
        }
      });
      this.todoList.sort((first, second) => second.id - first.id);
      this.doingList.sort((first, second) => second.id - first.id);
      this.doneList.sort((first, second) => second.id - first.id);
    });
  }

  //右移
  @computed
  async right(item: Todo) {
    let upData = {
      id: item.id,
      event: item.event,
      status: item.status + 1,
    };
    let data = JSON.stringify(upData);
    let newUrl = `${this.url}/${item.id}`;
    await put(newUrl, data).then((res) => {
      console.log(res);
    });
    this.setData();
  }

  //左移
  @computed
  async left(item: Todo) {
    let upData = {
      id: item.id,
      event: item.event,
      status: item.status - 1,
    };
    let data = JSON.stringify(upData);
    let newUrl = `${this.url}/${item.id}`;
    await put(newUrl, data).then((res) => {
      console.log(res);
    });
    this.setData();
  }

  //delete
  @computed
  async del(id: number) {
    let newUrl = `${this.url}/${id}`;
    await del(newUrl).then((r) => {
      console.log(r);
    });
    this.setData();
  }

  //添加
  @computed
  async add() {
    let obj = {
      id: new Date().getTime(),
      event: this.event,
      status: 0,
    };
    let data = JSON.stringify(obj);
    await post(this.url, data);
    this.setData();
  }

  constructor() {
    makeAutoObservable(this);
    this.setData();
  }
}

export default new Store();
