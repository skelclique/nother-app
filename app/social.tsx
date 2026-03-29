import { Stack } from 'expo-router'
import { View } from 'react-native'

export default function Social() {
  return (
    <>
      <Stack.Screen options={{ title: 'Social', headerTransparent: true }} />
      <View className="flex-1 items-center justify-center"></View>
    </>
  )
}
