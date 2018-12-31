import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./activity.scss";

export default class Activity extends Component {
  constructor() {
    super(...arguments);
  }

  state = {
    activity: [
      {
        type: "cut",
        info: [
          { total: 48, cut: 10 },
          { total: 58, cut: 20 },
          { total: 100, cut: 30 }
        ]
      }
    ]
  };

  getTextBtType(type) {
    switch (type) {
      case "cut":
        return "减";
      default:
        return "减";
    }
  }

  getLine(array: Array<{ total: number; cut: number }>) {
    if (!array || !Array.isArray(array)) return "";
    return array.map(item => `满${item.total}减${item.cut}`).join(";");
  }
  render() {
    const {
      activity: [firstItem]
    } = this.state;
    return (
      <View className="activity">
        <Text className="type">{this.getTextBtType(firstItem.type)}</Text>
        <Text>{this.getLine(firstItem.info)}</Text>
        <Text className="length">{this.state.activity.length}个活动</Text>>
      </View>
    );
  }
}
