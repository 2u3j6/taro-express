import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './order.less'

export default function Index () {
  useLoad(() => {
    console.log('order loaded.')
  })
  

  return (
    <View className="index">
      <Text>我的订单</Text>
    </View>
  )
}
