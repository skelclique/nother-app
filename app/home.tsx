import { Stack } from 'expo-router'
import { View } from 'react-native'

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home', headerTransparent: true }} />
      <View className="flex-1 items-center justify-center"></View>
    </>
  )
}
