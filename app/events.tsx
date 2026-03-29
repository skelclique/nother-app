import { Text } from '@/components/ui/text'
import { Stack } from 'expo-router'
import { View } from 'react-native'

export default function Events() {
  return (
    <>
      <Stack.Screen options={{ title: '', headerTransparent: true }} />
      <View className="flex-1 items-center justify-center">
        <Text>Events</Text>
      </View>
    </>
  )
}
