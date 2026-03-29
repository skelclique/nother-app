import { Button } from '@/components/ui/button'
import { View } from 'react-native'
import { Disc3, Home, Menu, Ticket, Users } from 'lucide-react-native'
import { usePathname, useRouter } from 'expo-router'

export function Navbar() {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <View className="absolute bottom-0 flex w-full flex-row justify-around border-t border-zinc-900 bg-zinc-900 p-4 pb-8">
      <Button
        variant="link"
        onPress={() => router.navigate({ pathname: '/home' })}>
        <Home color={pathname === '/home' ? 'green' : '#71717a'} />
      </Button>
      <Button
        variant="link"
        onPress={() => router.navigate({ pathname: '/social' })}>
        <Users color={pathname === '/social' ? 'green' : '#71717a'} />
      </Button>
      <Button
        variant="link"
        onPress={() => router.navigate({ pathname: '/library' })}>
        <Disc3 color={pathname === '/library' ? 'green' : '#71717a'} />
      </Button>
      <Button
        variant="link"
        onPress={() => router.navigate({ pathname: '/events' })}>
        <Ticket color={pathname === '/events' ? 'green' : '#71717a'} />
      </Button>
      <Button
        variant="link"
        onPress={() => router.navigate({ pathname: '/menu' })}>
        <Menu color={pathname === '/menu' ? 'green' : '#71717a'} />
      </Button>
    </View>
  )
}
