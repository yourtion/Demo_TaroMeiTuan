import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./cata.scss";

export interface ICataProp {
  onChangeCata?: ({ id: number, name: string }) => void;
}

export default class Cata extends Component<ICataProp> {
  constructor() {
    super(...arguments);
  }
  state = {
    selectCata: { id: null, name: "" },
    cata: [
      { id: 1, name: "专场" },
      { id: 2, name: "热销" },
      { id: 3, name: "折扣" },
      { id: 4, name: "主食" },
      { id: 5, name: "热炒" },
      { id: 6, name: "凉菜" },
      { id: 7, name: "特色乱炖" }
    ]
  };

  clickHandle(item: { id: number; name: string }) {
    if (this.state.selectCata.id !== item.id) {
      this.setState({ selectCata: item }, () => {
        this.props.onChangeCata &&
          this.props.onChangeCata(this.state.selectCata);
      });
    }
  }

  render() {
    const { cata, selectCata } = this.state;
    return (
      <View className="cata">
        {cata.map(item => {
          return (
            <Text
              onClick={this.clickHandle.bind(this, item)}
              className={
                "cata_name" +
                (selectCata && selectCata.id == item.id ? " select" : "")
              }
              key={item.id}
            >
              {item.name}
            </Text>
          );
        })}
      </View>
    );
  }
}
