import { View } from "@tarojs/components";
import questionResults from "../../resources/demo/question_result.json";
import questions from "../../resources/demo/question.json";
// 引用文件
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss"
import "../../utils/bizUtils"
import {getBestQuestionResult} from "../../utils/bizUtils";

export default () => {
  // const result = questionResult[0];
  const answerList = Taro.getStorageSync("answerList");
  if (!answerList || answerList.length < 1) {
    Taro.showToast({
      title: '答案为空',
      icon: 'error',
      duration: 3000
    })
  }

  const result = getBestQuestionResult(answerList, questions, questionResults);
  return (
    <View className="resultPage">
      <View className="at-article__h1 title">{result.resultName}</View>
      <View className="at-article__h3 subTitle">{result.resultDesc}</View>
      <AtButton
        type="primary"
        size="normal"
        circle
        className="enterBtn"
        onClick={() => {
          // 跳转到首页
          Taro.reLaunch({
            url: "/pages/index/index",
          });
        }}
      >
        返回
      </AtButton>
    </View>
  );
};

