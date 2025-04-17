import { Stack } from 'expo-router';
import { LogBox } from 'react-native';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown:false}} />
      <Stack.Screen name='+not-found'/>
    </Stack>
  );
}
