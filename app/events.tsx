import { Stack } from 'expo-router'
import { View } from 'react-native'

export default function Events() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events', headerTransparent: true }} />
      <View className="flex-1 items-center justify-center"></View>
    </>
  )
}
