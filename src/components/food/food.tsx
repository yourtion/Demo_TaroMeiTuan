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
    current: 0,
    tabList: [{ title: "点菜" }, { title: "评价" }, { title: "商家" }]
  };
  changeTabs(value) {
    console.log(value)
    this.setState({ current: value });
  }
  render() {
    const { current, tabList } = this.state;
    return (
      <View>
        <AtTabs
          current={current}
          tabList={tabList}
          onClick={this.changeTabs.bind(this)}
        >
          <AtTabsPane current={current} index={0} ><Cata /></AtTabsPane>
          <AtTabsPane current={current} index={1}>评价</AtTabsPane>
          <AtTabsPane current={current} index={2}>商家</AtTabsPane>
        </AtTabs>
      </View>
    );
  }
}
