import { View } from "@tarojs/components";
// 引用文件
import { useEffect, useState } from "react";
import { AtButton, AtRadio } from "taro-ui";
import questions from "../../resources/demo/question.json";
import "../../pages/index/index.scss";
import Taro from "@tarojs/taro";
import "./index.scss"

export default () => {
  // 当前题目序号从一开始
  const [current, setCurrent] = useState<number>(1);
  // 当前题目
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const radioOptions = currentQuestion.options.map((option) => {
    return {
      label: `${option.key}. ${option.value}`,
      value: option.key,
    };
  });
  // 当前回答
  const [currentAnswer, setCurrentAnswer] = useState<string>();
  // 回答列表
  const [answerList] = useState<string[]>([]);

  //当序号变化时，切换当前题目和当前回答，相当于监听了current
  useEffect(() => {
    setCurrentQuestion(questions[current - 1]);
    setCurrentAnswer(answerList[current - 1]);
  }, [current]);

  return (
    <View className="doQuestionPage">
      <View className="at-article__h2 title">
        {current}、{currentQuestion.title}
      </View>
      <View className="options-wrapper">
        <AtRadio
          // options：这是一个数组，包含所有可选择的选项。
          options={radioOptions}
          //value：输入框当前值，用户需要通过 onClick 事件来更新 value 值，必填。
          value={currentAnswer}
          // onClick：这是一个函数，当用户点击单选按钮时触发。它接收一个参数value，表示被点击的选项的值。
          onClick={(value) => {
            setCurrentAnswer(value);
            // 记录答案
            answerList[current - 1] = value;
            // 下一题
            {
              current < questions.length && setCurrent(current + 1);
            }
          }}
        />
      </View>
      {/*上一题按键*/}
      {current > 1 && (
        <AtButton
          type="primary"
          size="normal"
          circle
          className="enterBtn"
          onClick={() => {
            setCurrent(current - 1);
          }}
        >
          上一题
        </AtButton>
      )}
      {/*提交结果按键*/}
      {(current >= questions.length || (answerList.length === questions.length)) && (
        <AtButton
          type="primary"
          size="normal"
          circle
          className="enterBtn"
          disabled={!currentAnswer}
          onClick={() => {
            Taro.setStorageSync('answerList', answerList);
            Taro.navigateTo({
              url: "/pages/result/index",
            });
          }}
        >
          完成
        </AtButton>
      )}
    </View>
  );
};
