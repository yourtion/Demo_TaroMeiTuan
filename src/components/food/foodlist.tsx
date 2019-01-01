import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import "./foodlist.scss";

export interface IFoodListProp {
  list?: any[];
  selectCata: { id: number; name: string };
}

export default class FoodList extends Component<IFoodListProp> {
  render() {
    const { selectCata, list } = this.props;
    console.log(JSON.stringify(this.props.list));
    return (
      <View className="foodlist">
        <Text>{selectCata.name}</Text>
        <View className="forlist">
          {list &&
            list.map((item) => {
              return (
                <View className="item" key={item.id}>
                  <Image
                    className="img"
                    src={require(`../../assets/img/${item.img}.jpg`)}
                  />
                  <View className="info">
                    <Text>{item.title}</Text>
                    <Text>月售：{item.sole}</Text>
                    <Text className="price">价格：￥{item.price}</Text>
                  </View>
                </View>
              );
            })}
        </View>
      </View>
    );
  }
}
