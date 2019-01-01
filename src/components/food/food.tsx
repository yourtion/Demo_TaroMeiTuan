import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtTabs, AtTabsPane } from "taro-ui";
import Cata from "./cata";
import FoodList from "./foodlist";
import "./food.scss";

export default class Food extends Component {
  constructor() {
    super(...arguments);
  }
  state = {
    current: 0,
    tabList: [{ title: "点菜" }, { title: "评价" }, { title: "商家" }],
    foodList: [{ pid: 0 }],
    currentList: [],
    selectCata: { id: 0, name: "" }
  };
  changeTabs(value) {
    console.log(value);
    this.setState({ current: value });
  }
  changeCata({ id, name }) {
    console.log(id);
    this.setState({ selectCata: { id, name } });
    if (this.state.foodList.some(item => item.pid === id)) {
      // 不用加载数据
      this.setState({
        currentList: this.state.foodList.filter(item => item.pid === id)
      });
    } else {
      // 模拟加载
      const newList = this.getData(id);
      this.setState({
        foodList: this.state.foodList.concat(newList),
        currentList: newList
      });
    }
  }
  getData(cataId: number) {
    const count = Math.floor(Math.random() * 2 + 1);
    return Array.from(Array(Math.round(Math.random() * 20)), (v, k) => ({
      pid: cataId,
      id: cataId + "_" + k,
      title: "分类" + k,
      sole: Math.round(Math.random() * 50),
      price: Math.round(Math.random() * 20),
      img: count
    }));
  }
  render() {
    const { current, tabList, currentList, selectCata } = this.state;
    return (
      <View>
        <AtTabs
          current={current}
          tabList={tabList}
          onClick={this.changeTabs.bind(this)}
        >
          <AtTabsPane current={current} index={0}>
            <View className="food_body">
              <Cata onChangeCata={this.changeCata.bind(this)} />
              <FoodList list={currentList} selectCata={selectCata} />
            </View>
          </AtTabsPane>
          <AtTabsPane current={current} index={1}>
            评价
          </AtTabsPane>
          <AtTabsPane current={current} index={2}>
            商家
          </AtTabsPane>
        </AtTabs>
      </View>
    );
  }
}
