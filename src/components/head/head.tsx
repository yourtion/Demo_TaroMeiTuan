import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import Top from "./top";
import "./head.scss";

export default class Head extends Component {
  constructor() {
    super(...arguments);
  }
  state = {
    store: {
      title: "川湘居",
      notic: "欢迎光临，很高兴为您服务～",
      tags: ["味道赞", "味道真好", "分量足"]
    }
  };

  render() {
    const { store } = this.state;
    return (
      <View className="head">
        <Top />
        <Image src={require("../../assets/img/back.jpg")} className="back" />
        <View className="store">
          <Image
            src={require("../../assets/img/store.jpg")}
            className="store_img"
          />
          <View className="store_text">
            <Text>{store.title}</Text>
            <Text>{store.notic}</Text>
            <View>
              {store.tags.map((item, index) => (
                <Text className="tags_text" key={index}>
                  {item}
                </Text>
              ))}
            </View>
          </View>
        </View>
      </View>
    );
  }
}
