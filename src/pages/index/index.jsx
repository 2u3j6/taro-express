import { View,  } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'

// const DEFAULT_TAB_LIST = [
//   {title:'机票',tab:'flight',index:0},
//   {title:'火车票',tab:'train',index:1},
//   {title:'酒店',tab:'hotel',index:2},
//   {title:'汽车票',tab:'bus',index:3},
// ]

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })
  

  return (
    <View className="container">
      <View className="top">
        <View className="top-tab">
          {/* {
            DEFAULT_TAB_LIST.map((item) => {
              return <View key={item.tab}>{item.title}</View>
            })
          } */}
          <View>xx</View>
          <View>aaa </View>
        </View>
      </View >
    </View>
  )
}
