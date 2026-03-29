import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { Stack } from 'expo-router'
import { Plus } from 'lucide-react-native'
import { StatusBar, View } from 'react-native'

function LibraryHeader() {
  const statusBarHeight = StatusBar.currentHeight

  if (!statusBarHeight) return null

  return (
    <View
      className="mt-2 flex h-24 flex-row items-center justify-between px-8"
      style={{ paddingTop: statusBarHeight }}>
      <Text className="text-2xl font-bold text-white">Library</Text>
      <Button
        variant="link"
        className="p-0"
        onPress={() => {
          console.log('Add new item to library')
        }}>
        <Plus color="white" />
      </Button>
    </View>
  )
}

export default function Library() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Library',
          headerTransparent: true,
          header: () => <LibraryHeader />,
        }}
      />
      <View className="flex-1 items-center justify-center"></View>
    </>
  )
}
