import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'
import {AtButton} from "taro-ui";
import Taro from "@tarojs/taro";

export default class Index extends Component<PropsWithChildren> {
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>

        <Text>用户界面</Text>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <AtButton loading type='primary' onClick={()=>{
          // 跳转到目的页面，在当前页面打开
          Taro.redirectTo({
            url: '/pages/index/index',
          })
        }}>跳转</AtButton>

      </View>

    )
  }
}
