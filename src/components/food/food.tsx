import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import { AtTabs, AtTabsPane } from "taro-ui";
import Cata from "./cata";
import "./food.scss";

export default class Food extends Component {
  constructor() {
    super(...arguments);
  }
  state = {
    currentTab: 0,
    tabList: [{ title: "点菜" }, { title: "评价" }, { title: "商家" }]
  };
  changeTabs(value) {
    this.setState({ currentTab: value });
  }
  render() {
    const { currentTab, tabList } = this.state;
    return (
      <View>
        <AtTabs
          current={currentTab}
          tabList={tabList}
          onClick={this.changeTabs.bind(this)}
        >
          <AtTabsPane><Cata /></AtTabsPane>
          <AtTabsPane>评价</AtTabsPane>
          <AtTabsPane>商家</AtTabsPane>
        </AtTabs>
      </View>
    );
  }
}
