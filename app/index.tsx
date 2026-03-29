import { Stack, useRouter } from 'expo-router'
import * as React from 'react'

export default function Screen() {
  const router = useRouter()

  React.useEffect(() => {
    router.push('/home')
  }, [router])

  return (
    <>
      <Stack.Screen options={{ title: '' }} />
    </>
  )
}
