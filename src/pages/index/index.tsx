import { View } from "@tarojs/components";
// 引用文件
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "../../pages/index/index.scss"

export default () => {
  return (
    <View className="indexPage">
      <View className="at-article__h1 title">MBTI 性格测试</View>
      <AtButton
        type="primary"
        size="normal"
        circle
        className="enterBtn"
        onClick={() => {
          // 跳转到目的页面，打开新页面
          Taro.navigateTo({
            url: "/pages/doQuestion/index",
          });
        }}
      >
        开始测试
      </AtButton>
    </View>
  );
};

