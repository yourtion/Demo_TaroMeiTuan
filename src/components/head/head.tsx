import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import Top from "./top";

export default class Head extends Component {
  render() {
    return (
      <View className="head">
        <Top />
        <View>整体头部</View>
      </View>
    );
  }
}
