import { Stack } from 'expo-router'
import { View } from 'react-native'

export default function Menu() {
  return (
    <>
      <Stack.Screen options={{ title: 'Menu', headerTransparent: true }} />
      <View className="flex-1 items-center justify-center"></View>
    </>
  )
}
