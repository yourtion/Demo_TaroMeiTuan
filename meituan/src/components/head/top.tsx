import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import "./top.scss";

export default class Top extends Component {
  render() {
    return (
      <View className="top">
        <View className="left">
          <Image className="img" src={require("../../assets/img/left.png")} />
        </View>
        <View className="right">
          <Image className="img" src={require("../../assets/img/search.png")} />
          <Image className="img" src={require("../../assets/img/collect.png")} />
          <Image className="img" src={require("../../assets/img/tuan.png")} />
          <Image className="img" src={require("../../assets/img/lue.png")} />
        </View>
      </View>
    );
  }
}
